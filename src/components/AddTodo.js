import React, { useState } from "react";
import Button from "./Button";

const AddTodo = ({addTodo,inputValue,setInputValue}) => {
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

export default AddTodo;
