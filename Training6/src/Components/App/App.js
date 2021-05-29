import React from "react";
import Connection from "../Connection/Connection";

export default function App() {
  return (
    <div>
      <Connection />
      <div className="wrapper">
        <header>Event Channel </header>
        <div className="inputField">
          <input type="text" placeholder="Add your new todo" />
          <button>
            <i className="fas fa-plus" />
          </button>
        </div>
        <ul className="todoList">
          {/* data are comes from local storage */}
          <li>
            123{" "}
            <span class="icon">
              <i class="fas fa-trash"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
