import { take, all, fork, put, call } from "redux-saga/effects";
import * as getAPI from "./userSaga";

export default function* rootSaga() {
  //   yield all([getUserAPI]);
  yield all([getAPI.getUserAPI(), getAPI.LoginUserAPI()]);
}
