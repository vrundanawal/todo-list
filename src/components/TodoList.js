import React from "react";
import Button from "./Button";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}

          <Button onClick={() => removeTodo(index)} title="Delete" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
