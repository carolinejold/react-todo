import React from "react";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  return (
    <div className="App todo">
      <header className="App-header">
        <h1>What do I need to do today?
</h1>
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
