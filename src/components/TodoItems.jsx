import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;                //Normal Way of using context but we can use this simply by destructuring 

  const {todoItems,deleteItem} = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item, id) => (
        <TodoItem
          key={id}
          todoName={item.name}
          tododate={item.dueDate}
          handleDelete={deleteItem}
        />
      ))}
    </>
  );
};

export default TodoItems;
