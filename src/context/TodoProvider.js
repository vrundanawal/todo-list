import React, { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <TodoContext.Provider value={[todos, setTodos,inputValue, setInputValue]}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
