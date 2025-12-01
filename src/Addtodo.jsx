import React, { useState, useRef } from 'react';
import { MdAddBox } from "react-icons/md";

const Addtodo = ({onNewItem}) => {
   
  // const [todoName, setTodoName] = useState("")
  // const [todoDate, setTodoDate] = useState("")

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleName = (e) => {
  //     let newTodo = e.target.value;
  //     setTodoName(newTodo)
      
  // }
  // const handleDate = (e) => {
  //     let newDate = e.target.value;
  //     setTodoDate(newDate)
      
  // }

  const handleAddButtonClicked = (e) =>{
    e.preventDefault(); 
    const todoName = todoNameElement.current.value;
    const todoDate = dueDateElement.current.value;
    onNewItem(todoName,todoDate)
    todoNameElement.current.value = ''
    dueDateElement.current.value = ''
  }

  return (
    <div className="container ">
    <form className="row KgRow"
    onSubmit={handleAddButtonClicked}
    >
    <div className="col-6">
      <input type="text" placeholder='Enter TODO Here'
       ref={todoNameElement}
      
      />
    </div>
    <div className="col-4">
      <input type="date"
      
      ref={dueDateElement}
      />
    </div>
    <div className="col-2">
      <button type="submit" 
      className="btn btn-success KgButton"
      ><MdAddBox /></button>
    </div>
  </form>
    </div>
  )
}

export default Addtodo