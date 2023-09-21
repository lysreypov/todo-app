import React from "react";

import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const Task = (props) => {
  const handleDeleteTask = (id) => {
    // filter the deleted task from todoList
    const updatedToDoList = props.todoList.filter((task) => task.id !== id);

    // update todoList
    props.onDelete(updatedToDoList);
  };

  const handleTaskStatus = (id) => {
    props.completed(id);
  };

  return (
    <>
      {props.todoList.map((task) => (
        <div className="task" key={task.id}>
          <div className="task-name">
            <input
              type="checkbox"
              onClick={() => handleTaskStatus(task.id)}
              defaultChecked={task.completed}
            />
            <p className={task.completed ? "task-done" : ""}>{task.title}</p>
          </div>
          <div className="task-setting">
            <MdDelete
              className="task-button"
              onClick={() => handleDeleteTask(task.id)}
            />
            <FiEdit className="task-button" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
