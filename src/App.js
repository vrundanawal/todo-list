import React from "react";
import "./App.css";
import TaskContextProvider from "./context/TaskContextProvider";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <TaskContextProvider>
        <div className="task">
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
