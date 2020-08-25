import React, { useState } from "react";
import AddToDo from "./AddToDo";
import Task from "./Task";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTasks = [...tasks, { title, completed: false }];
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
      <div>
        <AddToDo addTask={addTask} />
      </div>
      {/* <div className="todo"> */}
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
      {/* </div> */}
    </div>
  );
}
