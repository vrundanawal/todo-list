import React, { useState } from 'react';
import './TaskForm.css';

export default function TaskForm() {
  // Define state for the todo list items and input field
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Define function to add a new todo item to the list
  const addTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  // Define function to remove a todo item from the list
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="TaskForm">
      <h1>Todo List</h1>
     
      {/* Render the input field to add new todo items */}
      <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addTodo}>Add</button>
      </div>
       {/* Render the list of todo items */}
       <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}