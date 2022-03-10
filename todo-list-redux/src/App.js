import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddNewTask from "./Components/AddNewTask";

function getDataFromLocalStorage() {
  const hours = 24;
  const localDate = new Date();
  const now = localDate.getTime();
  let setupedTime = localStorage.getItem("date"); //getiing from localstorage
  if (now - setupedTime > hours * 60 * 60 * 1000) {
    localStorage.clear();
    console.log("localstorage cleared");
  }
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}
function App() {
  const [todos, setTodos] = useState(getDataFromLocalStorage());
  const addTodoHandler = (todo) => {
    setTodos((todos) => [...todos, todo]);
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <div className="main">
        <Header />
        <TodoList todos={todos} />
        <AddNewTask onAddTodo={addTodoHandler} />
      </div>
    </div>
  );
}

export default App;
