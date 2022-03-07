import React, { useState } from "react";

import AddNewTask from "./AddNewTask";
// import InputForm from "./InputForm";
import ListItem from "./ListItem";
import defaultTodos from "./ListItems.json";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState(defaultTodos);
  // handling when the input will be submitted via inputForm
  const addTodoHandler = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  };

  return (
    <>
      <div className="list-container">
        {todos === "null" ? (
          <ListItem />
        ) : (
          todos.map((todo) => <ListItem key={todo.id} todo={todo} />)
        )}
      </div>
      <AddNewTask onAddTodo={addTodoHandler} />
    </>
  );
}
export default TodoList;
