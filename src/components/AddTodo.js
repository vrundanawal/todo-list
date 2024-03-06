import React, { useContext, useState } from "react";
import Button from "./Button";
import {TodoContext} from '../context/TodoProvider'

const AddTodo = () => {

  const {createTodo} = useContext( TodoContext );
  const [inputText, setInputText] = useState('');

  const handleAddTodo = () => {
    //validation for input field
    if (inputText.trim() !== "") {
      createTodo(inputText);
      setInputText("");
    }else{
      alert("Please enter the task");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        placeholder="Enter Todos"
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button title='Add' onClick={handleAddTodo}/>
      {/* <button onClick={handleAddTodo}>Add</button> */}
    </div>
  );
};

export default AddTodo;
