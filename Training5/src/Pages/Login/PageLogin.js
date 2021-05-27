import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { history } from "../../Components/App/App";
import FormLogin from "../../Components/Login/FormLogin";
import "./PageLogin.css";

export default function PageLogin() {
 
  const user = useSelector((state) => {
    return state.userToken;
  });

  useEffect(() => {
    if (user !== null) {
      console.log("123");
      window.location.replace("/");
    }
  }, []);
  return (
    <main class=" align-items-center py-3 py-md-0 col-md-12 main-login">
      <div class="container">
        <div className="card login-card ">
          <div className="row no-gutters">
            <FormLogin />
          </div>
        </div>
      </div>
    </main>
  );
}
