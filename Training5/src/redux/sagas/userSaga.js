import { take, all, fork, put, call, takeLatest } from "redux-saga/effects";
import Axios from "axios";

import { history } from "../../Components/App/App";

export function* getUserAPI() {
  yield take("GET_USER");
  console.log("action saga");
  let data = yield call(() => {
    return Axios({
      url: "http://localhost:9000/api/users",
      method: "GET",
    });
  });
}

export function* LoginUserAPI() {
  const action1 = yield take("LOGIN_USER");
  console.log("loading login", action1.values.password);

  const postValues = JSON.stringify(action1.values);
  console.log(postValues);

  let data = null;
  yield call(() => {
    return Axios.post("http://localhost:9000/login", {
      email: action1.values.email,
      password: action1.values.password,
    }).then((result) => {
      data = result.data;
      console.log(result.data);
      localStorage.setItem("persist:root", result.data.accessToken);

    });
  });

  yield put({ type: "LOGIN_USER", data: data });
  history.push("/");
}
