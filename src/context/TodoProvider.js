import React, { createContext, useState } from "react";

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const createTodo = (inputText) => {
    setTodos([...todos, { id: todos.length+1, inputText }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider value={{ todos, createTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
