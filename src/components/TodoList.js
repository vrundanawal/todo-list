import React, { useContext } from "react";

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
          <button  onClick={() => deleteTodo(todo.id)}>Delete</button>
          <button className='edit-button'  onClick={() =>handleEdit(todo.id)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
