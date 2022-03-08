import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddNewTask from "./Components/AddNewTask";

function getDataFromLocalStorage() {
  // const localDate = new Date().getTime();
  // const date = localStorage.getItem("date");
  // if (date !== localDate) {
  //   localStorage.clear();
  // }

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
