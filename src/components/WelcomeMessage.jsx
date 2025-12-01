import React, { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  // const contextObj = useContext(TodoItemsContext);
  // const todoItems = contextObj.todoItems;              //Normal Way of using context but we can use this simply by destructuring 

  const {todoItems} = useContext(TodoItemsContext);
  
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>Hello, Enjoy Your Day 😊</p>
    )
  );
};

export default WelcomeMessage;
