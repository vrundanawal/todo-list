import React from "react";
import Button from "./Button";

const Input = ({addTodo,inputValue,setInputValue}) => {
;

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter Todos"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button title='Add' onClick={addTodo}/>
    </div>
  );
};

export default Input;
