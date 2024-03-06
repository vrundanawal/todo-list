import React, { useState } from "react";
import "./TaskForm.css";
import TodoList from "./TodoList";


export default function TaskForm() {
  // Define state for the todo list items and input field
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Define function to add a new todo item to the list
  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { id: new Date().getTime(), inputValue }]);
      setInputValue("");
    } else {
      alert("Please add the task!");
    }
  };

  // Define function to remove a todo item from the list
  const handleRemoveTodo = (id) => {
    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== id;
    // })
    // setTodos(newTodos);
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="TaskForm">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleAddTodo}>Add</button>
      <TodoList todos={todos} removeTodo={handleRemoveTodo} />
    </div>
  );
}



