import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NEXT_MANUALLY_STATUS = {
  draft: "ready",
  error: "ready",
};

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
                if (!!NEXT_MANUALLY_STATUS[item.status]) {
                  dispatch({
                    type: "CHANGE_TASK_STATUS",
                    payload: {
                      task: item.task,
                      status: NEXT_MANUALLY_STATUS[item.status],
                    },
                  });
                }
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
