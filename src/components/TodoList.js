import React, { useContext } from "react";
import Button from "./Button";
import {TodoContext} from '../context/TaskContextProvider'

const TodoList = () => {
  const [ todos,setTodos ] = useContext( TodoContext );

  //Define function to remove a todo item from the list
  const handleRemoveTodo = (id) => {
    const filteredTodo = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(filteredTodo);
  };
  return (
    <ul>
      {todos && todos.map((todo) => (
        <li key={todo.id}>
          {todo.inputValue}
          <Button onClick={() => handleRemoveTodo(todo.id)} title="Delete" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
