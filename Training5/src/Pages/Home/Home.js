import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { history } from "../../Components/App/App";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

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
      Hello
    </div>
  );
}
