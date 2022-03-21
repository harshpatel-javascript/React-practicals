// import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddNewTask from "./Components/AddNewTask";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./redux/todo/todoAction";

function App() {
  const dispatch = useDispatch();
  const hours = 24;
  const localDate = new Date();
  const currentTime = localDate.getTime();
  let setupedTime = localStorage.getItem("date"); //getiing date from localstorage
  if (currentTime - setupedTime > hours * 60 * 60 * 1000) {
    dispatch(deleteTodo(currentTime, setupedTime));
    console.log("localstorage cleared");
  }
  return (
    <div className="App">
      <div className="main">
        <Header />
        <TodoList />
        <AddNewTask />
      </div>
    </div>
  );
}

export default App;
