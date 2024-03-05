import React, { useContext } from "react";
import Button from "./Button";
import { TodoContext } from "./context/TaskContextProvider";

const Input = () => {

  const [ todos,setTodos,inputValue, setInputValue ] = useContext( TodoContext );

  const addTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
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
      <Button title='Add' onClick={addTodo}/>
    </div>
  );
};

export default Input;
