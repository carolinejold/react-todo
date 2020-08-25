import React, { useState } from "react";
import AddToDo from "./AddTask";
import Task from "./Task";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    const newTask = { taskName, completed: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const deletedTasks = [...tasks];
    deletedTasks.splice(index, 1);
    setTasks(deletedTasks);
  };

  return (
    <div>
      <AddToDo addTask={addTask} />
      <div className="todo-list">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            key={index}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
