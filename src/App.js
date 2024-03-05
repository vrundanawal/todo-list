import React from "react";
import "./App.css";
import TaskContextProvider from "./components/context/TaskContextProvider";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <TaskContextProvider>
        <div className="task">
          <h1>Todo List</h1>
          <Input />
          <TodoList />
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
