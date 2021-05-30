import {
  take,
  all,
  fork,
  put,
  call,
  takeLatest,
  takeEvery,
  select,
} from "redux-saga/effects";

export function* GetTask() {
  while (true) {
    // get ID
    const action1 = yield take("ADD_TASK");
    const data = { ...action1.values };
    yield put({ type: "ADD_TASK_SUCCESS", data: data });
  }
}
