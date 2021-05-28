import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Users.css";
export default function Users() {
  const usersList = useSelector((state) => {
    return state.usersList;
  });

  const renderList = () => {
    return usersList?.map((item, index) => {
      return (
        <div className="col-md-12 col-lg-6">
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
              <NavLink to={`/user${item.id}`}>Detail</NavLink>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="row" style={{ height: 0 }}>
      {renderList()}
    </div>
  );
}
