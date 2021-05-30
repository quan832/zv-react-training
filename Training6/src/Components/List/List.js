import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function List() {
  // task
  const tasks = useSelector((state) => {
    return state.task;
  });

  //   dispatch action
  const dispatch = useDispatch();

  const renderTask = () => {
    return tasks.map((item, index) => {
      return (
        <li key={index}>
          {item.task}{" "}
          {item.status === "draft" ? (
            <span
              class="icon"
              onClick={() => {
                dispatch({ type: "UPDATE_TASK", task: item });
              }}
            >
              <i class="fas fa-trash"></i>
            </span>
          ) : (
            <span class="icon">
              <i class="fa fa-wifi"></i>
            </span>
          )}
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
