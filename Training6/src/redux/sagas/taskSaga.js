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
    // get state channel status

    const payload = yield take(channel);

    const state = yield select((state) => state);

    const { task } = state;

    const channelStatus = payload.payload;

    if (channelStatus === true) {
      const readyTask = task.map((item, index) => {
        //  if have connection and status is ready
        if (item.status === "ready") {
          // 50 - 50%
          const status = ["error", "complete"];

          return {
            ...item,
            status: status[Math.floor(Math.random() * status.length)],
          };
        } else {
          return { ...item };
        }
      });

      // dispatch to reducer
      yield put({
        type: "UPDATE_TASK_WHEN_NETWORK_CHANGED",
        data: { ...state, task: readyTask, channelStatus: channelStatus },
      });
    } else {
      yield put({
        type: "UPDATE_TASK_WHEN_NETWORK_CHANGED",
        data: { ...state, channelStatus: channelStatus },
      });
    }
  }
}

export function* UpdateTask() {
  while (true) {
    const action1 = yield take("UPDATE_TASK");

    const task = yield select((state) => state.task);
    const network = yield select((state) => state.channelStatus);

    const result = task.map((item, index) => {
      if (item.task === action1.task.task && item.status !== "complete") {
        // check connection
        if (network === true) {
          const status = ["error", "complete"];
          return {
            ...item,
            status: status[Math.floor(Math.random() * status.length)],
          };
        } else {
          // not connection
          alert("can not change status");
          return { ...item };
        }
      } else if (
        item.task === action1.task.task &&
        item.status === "error" &&
        network === true
      ) {
        return { ...item, status: "ready" };
      } else {
        return { ...item };
      }
    });

    yield delay(500);

    yield put({
      type: "UPDATE_TASK_SUCCESS",
      result: result,
    });
  }
}

export function* ListenToUpdate() {
  // task
  while (true) {}
}
