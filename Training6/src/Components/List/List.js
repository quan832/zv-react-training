import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function List() {
  // task
  const tasks = useSelector((state) => {
    return state.task;
  });

  console.log(tasks);
  //   dispatch action
  const dispatch = useDispatch();

  const renderTask = () => {
    return tasks?.map((item, index) => {
      return (
        <li key={index}>
          {item.task} - <span style={{ color: "tomato" }}>{item.status}</span>
          {item.status !== "complete" ? (
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
