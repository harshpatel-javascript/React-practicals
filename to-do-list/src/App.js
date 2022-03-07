import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import TodoList from "./Components/TodoList";
import AddNewTask from "./Components/AddNewTask";

function App() {
  const [todos, setTodos] = useState([]);
  // handling when the input will be submitted via inputForm
  const addTodoHandler = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
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
