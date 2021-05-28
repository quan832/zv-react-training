import { initialState } from "../state/state";

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_USERS_SUCCESS":
      return { ...state, usersList: action.data };
    case "GET_INFO_SUCCESS":
      return { ...state, myProfile: action.data };
    case "LOGIN_USER":
      // state.userToken = action.data;

      return { ...state, userToken: action.data };
    default:
      return state;
  }
}
