import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

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

  console.log("==================", usersList);

  const renderUser = () => {
    return usersList?.users?.map((item, index) => {
      return (
        <li>
          <a href="#">{item.fullName}</a>
        </li>
      );
    });
  };

  return (
    <nav id="sidebar" className="bg-dark">
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
        <li>
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
