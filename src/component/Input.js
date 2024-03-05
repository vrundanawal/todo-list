import React, { useState } from "react";
import TodoList from "./TodoList";
import Button from "./Button";

const Input = ({todos,addTodo,inputValue,setInputValue}) => {
      // Define state for the todo list items and input field
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   // Define function to add a new todo item to the list
//   const addTodo = () => {
//     if (inputValue !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   // Define function to remove a todo item from the list
//   const removeTodo = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//   };

  return (
    <div>
      {/* Render the input field to add new todo items */}

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button title='Add' addTodo={addTodo}/>
      {/* <button onClick={addTodo}>Add</button> */}
      {/* <TodoList todos = {todos} removeTodo={removeTodo}/> */}
    </div>
  );
};

export default Input;
