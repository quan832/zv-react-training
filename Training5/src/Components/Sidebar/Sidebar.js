import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav id="sidebar" className="bg-dark">
      <ul className="list-unstyled components">
        <li className="active">
          <NavLink exact to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink exact to="/profile">Myinfo</NavLink>
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
            <li>
              <a href="#">User 1</a>
            </li>
            <li>
              <a href="#">User 2</a>
            </li>
            <li>
              <a href="#">User 3</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
