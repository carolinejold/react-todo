import React, { useState } from "react";

export default function AddToDo({ addTask }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    // else
    addTask(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Add a new task...
          <br />
          <input
            className="task-input"
            type="text"
            value={value}
            onChange={handleChange}
          />
        </label>
        <input className="submit" type="submit" value="Add" />
      </form>
    </div>
  );
}
