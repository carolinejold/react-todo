import React from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

const App = () => {
  return (
    <div className="todo">
      <header>
        <h1>What do I need to do today?</h1>
      </header>
      <ToDoList />
    </div>
  );
};

export default App;
