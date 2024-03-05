import React from 'react'
import Button from './Button'

const TodoList = ({removeTodo ,todos}) => {

  return (
    <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            {/* <button onClick={() => removeTodo(index)}>X</button> */}
            <Button onClick={() => removeTodo(index)} title='Delete'/>
          </li>
        ))}
      </ul>
  )
}

export default TodoList