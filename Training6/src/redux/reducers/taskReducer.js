import { initialState } from "../state/state";

// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

export default function (state = initialState, action) {
  switch (action.type) {
    // when add tasks success
    case "ADD_TASK_SUCCESS":
      return {
        ...state,
        task: [...state.task, action.values],
      };

    // when network change from off to on
    case "UPDATE_TASK_WHEN_NETWORK_CHANGED":
      return {
        ...state,
        task: state.task.map((item, index) => {
          if (item.task === action.task.task) {
            return action.task;
          }
          return item;
        }),
      };

    // change from draft to ready
    case "UPDATE_TASK_SUCCESS":
      console.log(action.task);
      return {
        ...state,
        task: state.task.map((item, index) => {
          if (item.task === action.task.task) {
            return action.task;
          }
          return item;
        }),
        channelStatus: action.channelStatus,
      };

    default:
      return state;
  }
}
