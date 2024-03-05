import React, { useState } from "react";
import "./TaskForm.css";
import Input from "./Input";
import TodoList from "./TodoList";

export default function TaskForm() {
  // Define state for the todo list items and input field
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Define function to add a new todo item to the list
  const addTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  // Define function to remove a todo item from the list
  const removeTodo = (index) => {
    //console.log(index);
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };
  return (
    <div className="taskForm">
      <h1>Todo List</h1>
      <Input
        addTodo={addTodo}
        inputValue={inputValue}
        setInputValue={setInputValue}
        todos={todos}
      />
      <TodoList todos={todos}  removeTodo={removeTodo}/>
    
    </div>
  );
}
