import { initialState } from "../state/state";

// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

export default function (state = initialState, action) {
  switch (action.type) {
    // when add tasks success
    case "ADD_TASK_SUCCESS":
      return {
        ...state,
        task: [...state.task, action.data],
      };

    // when network change from off to on
    case "UPDATE_TASK_WHEN_NETWORK_CHANGED":
      if (action.network === true) {
        return {
          ...state,
          task: state.task.map((item, index) => {
            // if status ready
            if (item.status === "ready") {
              const status = ["error", "complete"];
              // random error & compelte
              return {
                ...item,
                status: status[Math.floor(Math.random() * status.length)],
              };
            } else {
              // draft
              return { ...item };
            }
          }),
        };
      } else {
        return { ...state, channelStatus: action.network };
      }

    // change from draft to ready
    case "UPDATE_TASK_SUCCESS":
      return {
        ...state,
        task: state.task.map((item, index) => {
          if (item.task === action.task.task && item.status !== "complete") {
            return { ...item, status: "ready" };
          } else if (
            item.task === action.task.task &&
            item.status === "error"
          ) {
            return { ...item, status: "ready" };
          } else {
            return { ...item };
          }
        }),
      };

    default:
      return state;
  }
}
