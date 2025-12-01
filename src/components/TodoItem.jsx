import React from 'react';
import { MdDeleteForever } from "react-icons/md";


const TodoItem = ({todoName, tododate, handleDelete}) => {


  return (
    <div className="container">
     
       <div className="row KgRow">
    <div className="col-6">
     {todoName}
    </div>
    <div className="col-4">
      {tododate}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger KgButton"
      onClick={() => handleDelete(todoName)}
      ><MdDeleteForever /></button>
    </div>
  </div>
      </div>
  )
}

export default TodoItem