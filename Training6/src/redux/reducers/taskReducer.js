import { initialState } from "../state/state";

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK_SUCCESS":
      return {
        ...state,
        task: [...state.task, action.data],
      };
    default:
      return state;
  }
}
