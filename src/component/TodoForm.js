import React, { useState } from "react";

import { BsFillPlusSquareFill } from "react-icons/bs";
import Task from "./Task";

const TodoForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const taskChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    const id = todoList.length + 1;
    const newTask = { id: id, title: taskInput };
    setTodoList([...todoList, newTask]);

    // clear task input
    setTaskInput("");
  };

  return (
    <div className="form-container">
      <h1>Todo List</h1>
      <form className="form">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add task"
            value={taskInput}
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
      {todoList.length > 0 ? (
        <div className="task-container">
          <Task todoList={todoList} />
        </div>
      ) : null}
    </div>
  );
};

export default TodoForm;
