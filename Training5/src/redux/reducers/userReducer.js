import { initialState } from "../state/state";

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_USERS":
      state.usersList = action.data;
      console.log(action.data);
      return { ...state };
    case "LOGIN_USER":
      state.userToken = action.data;
      console.log(state);
      return { ...state };
    case "GET_INFO":
      console.log(action.data);
      state.myProfile = action.data;
      // console.log(state)
      return { ...state };
    default:
      return state;
  }
}
