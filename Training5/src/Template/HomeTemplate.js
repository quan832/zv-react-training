import React, { Fragment } from "react";
// setup Route
import { Route } from "react-router";
import Footer from "../Components/Footer/Footer.js";
// import component
import Header from "../Components/Header/Header.js";
import Sidebar from "../Components/Sidebar/Sidebar.js";

export default function HomeTemplate(props) {
  // declare component, route
  let { Component, ...restRoute } = props;

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            {/* Header */}
            <Header />
            <div className="wrapper">
              <Sidebar />
              <Component {...propsRoute} />
            </div>

            {/* <Header /> */}

            {/* <Footer /> */}
          </Fragment>
        );
      }}
    />
  );
}
