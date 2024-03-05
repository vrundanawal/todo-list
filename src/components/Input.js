import React, { useState } from "react";
import TodoList from "./TodoList";
import Button from "./Button";

const Input = ({addTodo,inputValue,setInputValue}) => {
;

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button title='Add' onClick={addTodo}/>
    </div>
  );
};

export default Input;
