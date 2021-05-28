import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Detail from "../Detail/Detail";
import "./Users.css";
export default function Users() {
  const usersList = useSelector((state) => {
    return state.usersList;
  });

  let { path, url } = useRouteMatch();

  const renderList = () => {
    return usersList?.map((item, index) => {
      return (
        <div className="col-md-12 col-lg-12">
          <div className="member-card">
            <div className="member-pic">
              <img
                className="member-pic rounded-circle"
                src={`https://randomuser.me/api/portraits/men/${index + 1}.jpg`}
              />
            </div>
            <div className="member-card-details">
              <a href="#">
                <div className="member-name">{item.fullName}</div>
              </a>
              <div className="member-position">Email: {item.email}</div>
            </div>
            <div className="btn-fired">
              <Link exact to={`${url}/${item.id}`}>
                Detail
              </Link>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row" style={{ height: 0 }}>
      <div className="col-lg-6">
        <div className="row">{renderList()}</div>
      </div>
      <div className="col-lg-6">
        <Switch>
          <Route path={`${path}/:id`}>
            <Detail />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
