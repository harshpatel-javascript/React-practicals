import React, { useState } from "react";

import Button from "./Button";
// import InputForm from "./InputForm";
import ListItem from "./ListItem";
import defaultTodos from "./ListItems.json";
import "./Lists.css";

function Lists() {
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
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </div>
      <Button onAddTodo={addTodoHandler} />
    </>
  );
}
export default Lists;
