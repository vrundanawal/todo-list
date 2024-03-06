import React, { useContext } from "react";
import Button from "./Button";
import {TodoContext} from '../context/TodoProvider'

const TodoList = () => {
 

  const {todos,deleteTodo,updateTodo} =useContext( TodoContext );

const handleEdit = (id) => {
  
  const newText = prompt('Enter new Task: ');
  if(newText){
    updateTodo(id,newText)
  }
}
console.log(todos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.inputText}</span>
          <Button onClick={() => deleteTodo(todo.id)} title="Delete" />
          <Button   title="Update" className='edit-button' onClick={() =>handleEdit(todo.id)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
