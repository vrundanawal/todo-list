import React, { useContext } from "react";

import { TodoContext } from "../context/TodoProvider";

const TodoList = () => {
  const { todos, deleteTodo } = useContext(TodoContext);

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.inputText}</span>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
