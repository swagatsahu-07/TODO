import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Appname from "./components/Appname";
import Addtodo from "./Addtodo";

import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // let newTodo = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,  // this code may give older value sometimes if it used for high grade development due to the async code because it directly depents on the current value of the useState so instead of this we can use a method over the setTOdo and change the value directly in it...
    //   },
    // ];
    // setTodoItems(newTodo);

    setTodoItems((currentValue) => [
      ...currentValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
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
