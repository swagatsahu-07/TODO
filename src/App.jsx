import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Appname from "./components/Appname";
import Addtodo from "./Addtodo";
import TodoItem from "./TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    let newTodo = [
      ...todoItems,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ];

    setTodoItems(newTodo);
  };

  const handleDelete = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <center className="TodoContainer">
        <Appname />
        <div className="TodoItem">
          <Addtodo onNewItem={handleNewItem} />
          {todoItems.length === 0 && <WelcomeMessage />}
          <TodoItems todoItems={todoItems} handleDelete={handleDelete} />
        </div>
      </center>
    </>
  );
};

export default App;
