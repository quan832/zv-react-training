import React from "react";
import "./Info.css";
export default function Info() {
  return (
    <div className="insta-main">
      <div className="insta-wrapper">
        <div className="insta-banner">
          <canvas
            width={320}
            height={200}
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ")',
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
                  'url("https://gravatar.com/avatar/1a2e88d917a70ca43b39498ba1fc5d0a?s=80&d=https://static.codepen.io/assets/avatars/user-avatar-150x150-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png")',
              }}
            />
          </div>
          <div className="insta-name">
            <h2>
              Earl Loyola<span>Front End Web Developer</span>
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
            <p>
              Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet.
              Lorem Ipsum Sit Amet. Lorem Ipsum Sit Amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
