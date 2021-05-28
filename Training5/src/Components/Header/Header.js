import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  // get token
  const user = useSelector((state) => {
    return state.userToken;
  });

  return (
    //navigation
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ marginBottom: "0!important" }}
    >
      <div
        className="container wrap-header"
        style={{ marginLeft: "0px!important" }}
      >
        <NavLink exact className="navbar-brand" to="/home">
          Login User
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {user !== "" ? (
              <li
                className="nav-item"
                onClick={() => {
                  window.localStorage.clear();
                  window.location.replace("/login");
                }}
              >
                <a className="nav-link">Log Out</a>
              </li>
            ) : (
              <Fragment />
            )}
            {/* <li className="nav-item ">
              <NavLink className="nav-link" to="/home">
                Home
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Blog
              </a>
            </li> */}
            {/* <li className="nav-item">
              {!user.username ? (
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              ) : (
                <NavLink
                  onClick={() => {
                    localStorage.clear();
                    window.location.assign("/login");
                  }}
                  className="nav-link"
                  to="/login"
                >
                  Logout
                </NavLink>
              )}
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
