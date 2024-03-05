import React from "react";
import Button from "./Button";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos && todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <Button onClick={() => removeTodo(index)} title="Delete" />
          <Button title='Edit'/>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
