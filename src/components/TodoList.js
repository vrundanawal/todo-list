import React from "react";
import Button from "./Button";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.inputValue}
          <Button onClick={() => removeTodo(todo.id)} title="Delete" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
