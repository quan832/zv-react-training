import React from "react";
import { useSelector } from "react-redux";

export default function List() {
  // task
  const tasks = useSelector((state) => {
    return state.task;
  });

  console.log(tasks);
  
  const renderTask = () => {
    return tasks.map((item, index) => {
      return (
        <li key={index}>
          {item.task}{" "}
          <span class="icon">
            <i class="fas fa-trash"></i>
          </span>
        </li>
      );
    });
  };

  return (
    <ul className="todoList">
      {/* data are comes from local storage */}
      {renderTask()}
    </ul>
  );
}
