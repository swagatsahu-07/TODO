import React, { useState } from 'react';
import { MdAddBox } from "react-icons/md";

const Addtodo = ({onNewItem}) => {
   
  const [todoName, setTodoName] = useState("")
  const [todoDate, setTodoDate] = useState("")

  const handleName = (e) => {
      let newTodo = e.target.value;
      setTodoName(newTodo)
      
  }
  const handleDate = (e) => {
      let newDate = e.target.value;
      setTodoDate(newDate)
      
  }

  const handleAddButtonClicked = (e) =>{
    e.preventDefault();
    onNewItem(todoName,todoDate)
    setTodoName('');
    setTodoDate('');
  }

  return (
    <div className="container ">
    <form className="row KgRow"
    onSubmit={handleAddButtonClicked}
    >
    <div className="col-6">
      <input type="text" placeholder='Enter TODO Here'
      value={todoName}
      onChange={handleName}
      />
    </div>
    <div className="col-4">
      <input type="date"
      value={todoDate}
      onChange={handleDate}
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