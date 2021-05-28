import React, { useEffect } from "react";
import "./Info.css";
import { useDispatch, useSelector } from "react-redux";

export default function Info(props) {
  const { profile } = props;

  return (
    <div className="insta-main">
      <div className="insta-wrapper">
        <div className="insta-banner">
          <canvas
            width={320}
            height={200}
            style={{
              backgroundImage:
                'url("https://spoilerguy.com/wp-content/uploads/2020/05/saitama-strength.jpg")',
            }}
          />
        </div>
        <div className="insta-details">
          <div className="insta-dp">
            <canvas
              width={150}
              height={150}
              style={{
                backgroundImage:
                  'url("https://randomuser.me/api/portraits/men/1.jpg")',
              }}
            />
          </div>
          <div className="insta-name">
            <h2>
              {profile ? profile.fullName : "admin"}
              <span>{profile ? profile.role : "admin"}</span>
            </h2>
          </div>
          <div className="insta-followers-wrap">
            <div className="insta-follow">
              <h2>
                150<span>Followers</span>
              </h2>
            </div>
            <div className="insta-follow">
              <h2>
                1000<span>Following</span>
              </h2>
            </div>
          </div>
          <div className="insta-button">
            <a href="#">Follow</a>
          </div>
          <div className="insta-bio">
            <p className="text-center">
              Email:{" "}
              <span style={{ fontWeight: "500" }}>
                {profile ? profile.email : "admin"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
