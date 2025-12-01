import React from 'react'
import TodoItem from './TodoItem'

const TodoItems = ({todoItems,handleDelete}) => {

   
  return (
   <>
    {todoItems.map((item,id) =>  <TodoItem key={id} todoName={item.name} tododate={item.dueDate} handleDelete={handleDelete}/>)}
   </>
  )
}

export default TodoItems