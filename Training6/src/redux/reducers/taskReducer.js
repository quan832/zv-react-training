import { initialState } from "../state/state";

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
