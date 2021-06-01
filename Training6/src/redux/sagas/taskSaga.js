import { eventChannel } from "@redux-saga/core";
import { useSelector } from "react-redux";
import {
  take,
  all,
  fork,
  put,
  call,
  takeLatest,
  takeEvery,
  select,
  delay,
} from "redux-saga/effects";

import eventNetwork from "./eventChannel";

export function* ListenNetwork() {
  const channel = yield call(eventNetwork);

  while (true) {
    const payload = yield take(channel);

    const channelStatus = payload.payload;
    // get state channel status
    // task error
    const task = yield select((state) => state.task);

    if (channelStatus === true) {
      for (let i = 0; i < task.length; i++) {
        if (task[i].status === "error") {
          yield delay(1000);

          task[i].status = "ready";
          // put reducer
          yield put({
            type: "UPDATE_TASK_WHEN_NETWORK_CHANGED",
            task: task[i],
            status: channelStatus,
          });
        }
      }
    } else {
      yield put({
        type: "UPDATE_TASK_WHEN_NETWORK_CHANGED",
        task: task,
        status: channelStatus,
      });
    }
  }
}

function* handleSubmit(action1) {
  // change task to ready
  const task = yield select((state) =>
    state.task.map((item) => {
      if (item.status === "draft" && action1.task.task === item.task) {
        return { ...item, status: "ready" };
      } else {
        return { ...item };
      }
    })
  );

  // error & complete status
  const status = ["error", "complete"];

  const network = yield select((state) => state.channelStatus);

  // submit each task
  if (network === true) {
    for (let i = 0; i < task.length; i++) {
      // if status ready & have connection -> change ready
      if (task[i].status === "ready") {
        task[i].status = status[Math.floor(Math.random() * status.length)];

        yield delay(1000);

        yield put({ type: "UPDATE_TASK_SUCCESS", task: task[i] });
      }
    }
  } else {
    for (let i = 0; i < task.length; i++) {
      // if status ready -> keep stable ready status
      if (task[i].status === "ready") {
        yield delay(1000);

        yield put({ type: "UPDATE_TASK_SUCCESS", task: task[i] });
      }
    }
  }
}

export function* taskSaga() {
  yield all([
    takeEvery("UPDATE_TASK", handleSubmit),
    ListenNetwork(),
  ]);
}
