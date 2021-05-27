import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

export default function Home() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log("useEffect get user");
  //   dispatch({
  //     type: "GET_USER",
  //   });
  // }, []);
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Header />
      <Footer />
    </div>
  );
}
