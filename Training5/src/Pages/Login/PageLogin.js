import React from "react";
import FormLogin from "../../Components/Login/FormLogin";
import "./PageLogin.css"

export default function PageLogin() {
  
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
