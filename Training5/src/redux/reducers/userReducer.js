import { initialState } from "../state/state";

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return { ...state };
    case "LOGIN_USER":
      state.userToken = action.data;
      console.log(state);
      return { ...state };
    default:
      return state;
  }
}
