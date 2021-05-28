import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isArray } from "lodash";
import axios from "axios";

export default function Sidebar() {
  // dispatch
  const dispatch = useDispatch();

  const user = useSelector((state) => {
    return state.userToken;
  });

  // dispatch to get data
  useEffect(() => {
    console.log("hello");
    dispatch({ type: "GET_USERS", values: user.token });
  }, []);

  const usersList = useSelector((state) => {
    return state.usersList;
  });

  console.log(usersList);
  const renderUser = () => {
    return usersList?.map((item, index) => {
      return (
        <li>
          <NavLink exact to={`/user${item.id}`}>
            {item.fullName}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <nav id="sidebar" className="bg-dark border-primary">
      <ul className="list-unstyled components">
        <li className="active">
          <NavLink exact to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile">
            Myinfo
          </NavLink>
        </li>
        <li
          onClick={() => {
            if (usersList === undefined) {
              alert("not admin");
            }
          }}
        >
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            class="dropdown-toggle"
          >
            User List
          </a>
          <ul class="collapse list-unstyled" id="pageSubmenu">
            {renderUser()}
          </ul>
        </li>
      </ul>
    </nav>
  );
}
