import React from "react";

import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

// const addedTasks = [
// {
// id: 1,
// title: "Build a Todo List",
// },
// {
// id: 2,
// title: "Practice Coding",
// },
// {
// id: 3,
// title: "Doing Exercise",
// },
// {
// id: 4,
// title: "Drinking Detox Water",
// },
// {
// id: 5,
// title: "Learn Design Pattern",
// },
// {
// id: 6,
// title: "Learn Design Pattern",
// },
// {
// id: 7,
// title: "Learn Design Pattern",
// },
// {
// id: 8,
// title: "Learn Design Pattern",
// },
// {
// id: 9,
// title: "Learn Design Pattern",
// },
// {
// id: 10,
// title: "Learn Design Pattern",
// },
// {
// id: 11,
// title: "Learn Design Pattern",
// },
// {
// id: 12,
// title: "Learn Design Pattern",
// },
// {
// id: 13,
// title: "Learn Design Pattern",
// },
// {
// id: 14,
// title: "Learn Design Pattern",
// },
// {
// id: 15,
// title: "Learn Design Pattern",
// },
// ];
//
const Task = (props) => {
  // console.log(props.todoList);
  return (
    <>
      {props.todoList.map((task) => (
        <div className="task" key={task.id}>
          <div className="task-name">
            <input type="checkbox" />
            <p>{task.title}</p>
          </div>
          <div className="task-setting">
            <MdDelete className="task-button" />
            <FiEdit className="task-button" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Task;
