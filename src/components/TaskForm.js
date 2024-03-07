import React, { useState } from "react";
import "./TaskForm.css";
import { useSelector, useDispatch } from "react-redux";
import { remove, add } from "../actions";

export default function TaskForm() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="TaskForm">
      <h1>Todo List</h1>

      {/* Render the input field to add new todo items */}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch(add(inputValue))}>Add</button>
      </div>
      {/* Render the list of todo items */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => dispatch(remove(task.id))}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
