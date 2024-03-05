import React from 'react'

const Button = ({title, addTodo}) => {
    
  return (
    <>
        <button onClick={addTodo}>{title}</button>
    </>
  )
}

export default Button