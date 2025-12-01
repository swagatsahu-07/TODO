import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Appname from "./components/Appname";
import Addtodo from "./Addtodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";


const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // let newTodo = [
    //   ...todoItems,
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,  
    //   },
    // ];
    // setTodoItems(newTodo);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Using ...todoItems spreads the existing array and adds a new item.
// But since React state updates are async, directly using todoItems
// may sometimes give stale values. 
// That's why we use the functional form of setTodoItems,
// which ensures we always get the latest state.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

        
    setTodoItems((currentValue) => [
      ...currentValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <TodoItemsContext.Provider value={{
        todoItems : todoItems,
        addNewItem : addNewItem,
        deleteItem : deleteItem,
        }}>
      <center className="TodoContainer">
        <Appname />
        <div className="TodoItem">
          <Addtodo />
           <WelcomeMessage />
          <TodoItems />
        </div>
      </center>
      </TodoItemsContext.Provider>
    </>
  );
};

export default App;
