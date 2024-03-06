import React from "react";
import "./App.css";
import TodoProvider from "./context/TodoProvider";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <TodoProvider>
        <div className="task">
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </TodoProvider>
    </div>
  );
}

export default App;
