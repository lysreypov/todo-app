import React, { useState } from "react";

import { BsFillPlusSquareFill } from "react-icons/bs";
import Task from "./Task";

const TodoForm = () => {
  const [taskInput, setTaskInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTask = () => {
    const id = todoList.length + 1;
    const newTask = { id: id, title: taskInput, completed: false };
    setTodoList([...todoList, newTask]);

    // clear task input
    setTaskInput("");
  };

  const updatedToDoList = (updatedToDoList) => {
    setTodoList(updatedToDoList);
  };

  const updateTaskStatus = (taskId) => {
    const updatedToDoList = todoList.map((task) => {
      if (task.id === taskId) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTodoList(updatedToDoList);
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
            onChange={(e) => setTaskInput(e.target.value)}
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
          <Task
            todoList={todoList}
            onDelete={updatedToDoList}
            completed={updateTaskStatus}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TodoForm;
