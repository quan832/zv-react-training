import { initialState } from "../state/state";

// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

export default function (state = initialState, action) {
  switch (action.type) {
    // when add tasks success
    case "ADD_TASK_SUCCESS":
      return {
        ...state,
        task: [...state.task, action.payload],
      };

    case "CHANGE_NETWORK_STATUS":
      return {
        ...state,
        channelStatus: action.payload.channelStatus,
      };
    // change from draft to ready
    case "CHANGE_TASK_STATUS":
      const { status, task } = action.payload;
      return {
        ...state,
        task: state.task.map((item, index) => {
          if (item.task === action.payload.task) {
            return {
              ...item,
              status: action.payload.status,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
}
