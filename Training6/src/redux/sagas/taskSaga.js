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

export function* GetTask() {
  while (true) {
    const action1 = yield take("ADD_TASK");

    // task
    const data = { ...action1.values };

    yield put({ type: "ADD_TASK_SUCCESS", data: data });
  }
}

export function* ListenNetwork() {
  const channel = yield call(eventNetwork);

  while (true) {
    const payload = yield take(channel);
    console.log(payload);

    // dispatch to reducer
    yield put({
      type: "UPDATE_TASK_WHEN_NETWORK_CHANGED",
      network: payload.payload,
    });
  }
}

export function* UpdateTask() {
  while (true) {
    const action1 = yield take("UPDATE_TASK");

    console.log(action1.task);

    yield delay(500);
    // dispatch to reducer for update specifically
    yield put({
      type: "UPDATE_TASK_SUCCESS",
      task: action1.task,
    });
  }
}

export function* ListenToUpdate() {
  // task
  while (true) {}
}
