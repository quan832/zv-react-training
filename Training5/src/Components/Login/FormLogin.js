import React, { Fragment } from "react";
// formik
import { useFormik } from "formik";
import * as yup from "yup";
// import img
import login from "./img/login.jpg";
import logo from "./img/logo.svg";
import { useDispatch } from "react-redux";

export default function FormLogin() {
  // dispatch
  const dispatch = useDispatch();

  const { handleChange, handleSubmit, errors, handleBlur, touched, isValid } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },

      validationSchema: yup.object().shape({
        email: yup
          .string()
          .required("email have not be empty !")
          .min(3, "email have to be at least 3 character!"),
        password: yup.string().required("Password have not be empty !"),
      }),

      onSubmit: (values) => {
        console.log(values);
        //Gọi api hoặc action để đưa dữ liệu về server
        dispatch({ type: "LOGIN_USER", values });
      },
    });

  return (
    <Fragment>
      <div className="col-md-5">
        <img src={login} alt="login" className="login-card-img" />
      </div>
      <div className="col-md-7">
        <div className="card-body">
          <div className="brand-wrapper">
            <img alt="logo" src={logo} className="logo" />
          </div>
          <p className="login-card-description">Sign into your account</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group" style={{ marginBottom: "0px" }}>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                required
                style={{ marginBottom: "0px" }}
                className="form-control"
                placeholder="Type your email "
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.email && touched.email ? (
              <p
                style={{ padding: "0 0 0 5px", marginTop: "10px" }}
                className="text-danger"
              >
                {errors.userName}
              </p>
            ) : (
              ""
            )}
            <div className="form-group mb-2" style={{ margin: "20px 0 0" }}>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                style={{ marginBottom: "0px" }}
                className="form-control"
                placeholder="***********"
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            {errors.password && touched.password ? (
              <p
                style={{ padding: "0 0 0 5px", margin: "0px 0 15px 0" }}
                className="text-danger"
              >
                {errors.password}
              </p>
            ) : (
              ""
            )}
            <button
              name="login "
              id="login"
              type="submit"
              className="btn btn-block login-btn mb-4 mt-4"
              disabled={!isValid}
              defaultValue="Login"
            >
              Login
            </button>
          </form>
          <a href="#!" className="forgot-password-link">
            Forgot password?
          </a>
          <p className="login-card-footer-text">
            Don't have an account?{" "}
            <a href="#!" className="text-reset">
              Register here
            </a>
          </p>
        </div>
      </div>
    </Fragment>
  );
}
