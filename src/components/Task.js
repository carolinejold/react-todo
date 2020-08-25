import React from "react";

const Task = ({ task, index, toggleTask, deleteTask }) => {
  return (
    <div
      className="todo-list-task"
      style={{
        order: task.completed ? "1" : "",
      }}
    >
      <div
        onClick={() => toggleTask(index)}
        style={{
          textDecoration: task.completed ? "line-through" : "",
          color: task.completed ? "black" : "",
        }}
      >
        {task.taskName}
      </div>
      <button
        className="remove-button"
        onClick={() => deleteTask(index)}
        style={{
          display: task.completed ? "" : "none",
        }}
      >
        X
      </button>
    </div>
  );
};

export default Task;
