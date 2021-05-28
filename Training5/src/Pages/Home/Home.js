import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Detail from "../Detail/Detail";
import Profile from "../Profile/Profile";
import Users from "../Users/Users";
import DashBoard from "./DashBoard";

export default function Home() {
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.userToken;
  });
  // useEffect(() => {
  //   console.log("useEffect get user");
  //   dispatch({
  //     type: "GET_USER",
  //   });
  // }, []);

  useEffect(() => {
    if (user === null) {
      console.log("123");
      // history.push("/login");
      window.location.replace("/login");
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Switch>
          <Route exact path="/home" component={DashBoard}></Route>
          <Route  path="/home/profile" component={Profile}></Route>
          <Route path="/home/users" component={Users}></Route>
        </Switch>
      </div>
    </div>
  );
}
