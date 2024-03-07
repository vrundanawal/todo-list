import React, { useState } from "react";
import "./TaskForm.css";
import { useSelector, useDispatch } from "react-redux";
import { remove, add, userInput } from "../actions";

export default function TaskForm() {
  const tasks = useSelector((state) => state.tasks);
  const currentInput = useSelector((state) => state.userInput);
  const dispatch = useDispatch();

  //const [inputValue, setInputValue] = useState("");

  return (
    <div className="TaskForm">
      <h1>Todo List</h1>

      {/* Render the input field to add new todo items */}
      <div>
        <input
          type="text"
          value={currentInput}
          onChange={(e) => dispatch(userInput(e.target.value))}
        />
        <button onClick={() => dispatch(add(currentInput))}>Add</button>
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
