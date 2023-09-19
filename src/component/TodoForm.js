import React, { useState } from "react";

import { BsFillPlusSquareFill } from "react-icons/bs";
import Task from "./Task";

const TodoForm = () => {
  const [task, setTask] = useState("");

  const taskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    console.log("task", task);
  };

  return (
    <div className="form-container">
      <h1>Todo List</h1>
      <form className="form">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task"
            required
            onChange={taskChange}
          />
          <BsFillPlusSquareFill className="add-icon" onClick={handleAddTask} />
        </div>
        <div className="status">
          <select name="status-selection">
            <option value="all">All</option>
            <option value="done">Done</option>
            <option value="in progress">In Progress</option>
          </select>
        </div>
      </form>
      <div className="task-container">
        <Task />
      </div>
    </div>
  );
};

export default TodoForm;
