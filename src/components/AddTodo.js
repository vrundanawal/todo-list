import React, { useContext } from "react";
import Button from "./Button";
import {TodoContext} from '../context/TodoProvider'

const AddTodo = () => {

  const [ todos,setTodos,inputValue, setInputValue ] = useContext( TodoContext );
  console.log(todos);

  const handleAddTodo = () => {
    //validation for input field
    if (inputValue.trim() !== "") {
      const newTodos = [...todos, { id: new Date().getTime(), inputValue }];
      setTodos(newTodos);
      setInputValue("");
    }else{
      alert("Please enter the task");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter Todos"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button title='Add' onClick={handleAddTodo}/>
    </div>
  );
};

export default AddTodo;
