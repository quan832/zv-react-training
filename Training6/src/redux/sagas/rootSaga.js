import { take, all, fork, put, call, takeEvery } from "redux-saga/effects";
import * as task from "./taskSaga";

export default function* rootSaga() {
  yield all([task.ListenNetwork(), task.UpdateTask()]);
}
