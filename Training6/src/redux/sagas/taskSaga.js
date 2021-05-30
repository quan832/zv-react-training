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
    const action1 = yield take("ADD_TASK");

    // task
    const data = { ...action1.values };
    yield put({ type: "ADD_TASK_SUCCESS", data: data });
  }
}

export function* UpdateTask() {
  while (true) {
    const action1 = yield take("UPDATE_TASK");

    console.log(action1.task);
    // task
    let state = yield select((state) => {
      return state;
    });

    console.log(state);
    if (state.channelStatus === true) {
      action1.task.status = "complete";
    } else {
      action1.task.status = "error";
    }

    yield put({ type: "UPDATE_TASK_SUCCESS", data: action1.task });
  }
}
