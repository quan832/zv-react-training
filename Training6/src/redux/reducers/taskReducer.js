import { initialState } from "../state/state";

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK_SUCCESS":
      return {
        ...state,
        task: [...state.task, action.data],
      };
    case "UPDATE_TASK_SUCCESS":
      const result = state.task.filter((item) => {
        return action.data.task !== item.task || action.data.status === "error";
      });

      return {
        ...state,
        task: result,
      };
    case "LISTEN_NETWORK":
      console.log(action.values);
      return {
        ...state,
        channelStatus: action.values,
      };
    default:
      return state;
  }
}
