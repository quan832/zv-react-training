import { take, all, fork, put, call, takeLatest } from "redux-saga/effects";
import Axios from "axios";



export function* LoginUserAPI() {
  console.log("login");
  const action1 = yield take("LOGIN_USER");
  console.log("loading login", action1.values.password);

  let data = null;
  yield call(() => {
    return Axios.post("http://localhost:9000/login", {
      email: action1.values.email,
      password: action1.values.password,
    }).then((result) => {
      data = result.data;
      console.log(result.data);
      console.log(result.data.error === "Incorrect password or email");
      if (result.data.error !== "Incorrect password or email") {
        window.location.replace("/");
      }
    });
  });

  if (data.error !== "Incorrect password or email") {
    yield put({ type: "LOGIN_USER", data: data });
  }
  // history.back("/login");
}

export function* getUsersAPI() {
  const action1 = yield take("GET_USERS");
  let data = null;

  console.log(action1.values);
  yield call(() => {
    return Axios.get("http://localhost:9000/api/users", {
      headers: {
        Authorization: `Bearer ${action1.values}`,
      },
    })
      .then((result) => {
        data = result.data;
      })
      .catch((err) => console.log(err.response));
  });

  yield put({ type: "GET_USERS", data: data });
}

export function* GetInfoAPI() {
  const action1 = yield take("GET_INFO");
  // chỗ này có nên lấy api từ local hay redux?
  let data = null;

  console.log(action1.values);
  yield call(() => {
    return Axios.get("http://localhost:9000/api/users/my", {
      headers: {
        Authorization: `Bearer ${action1.values}`,
      },
    })
      .then((result) => {
        data = result.data;
      })
      .catch((err) => console.log(err.response));
  });

  yield put({ type: "GET_INFO", data: data });
}