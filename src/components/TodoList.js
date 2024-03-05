import React, { useContext } from "react";
import Button from "./Button";
import { TodoContext } from "./context/TaskContextProvider";

const TodoList = () => {
  const [ todos,setTodos ] = useContext( TodoContext );

  //Define function to remove a todo item from the list
  const removeTodo = (index) => {
    //console.log(index);
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  };
  return (
    <ul>
      {todos && todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <Button onClick={() => removeTodo(index)} title="Delete" />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
