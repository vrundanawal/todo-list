import React, { createContext, useState } from "react";

export const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const createTodo = (inputText) => {
    setTodos([...todos, { id: new Date().getTime(), inputText }]);
  };

  // const readTodo = (id) => {
  //   return todos.find((todo) => todo.id === id);
  // };

  const updateTodo = (id, newInputText) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, inputText: newInputText } : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <TodoContext.Provider
      value={{ todos, createTodo, deleteTodo ,updateTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
