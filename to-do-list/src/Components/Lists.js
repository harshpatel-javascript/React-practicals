import React, { useState } from "react";

import InputForm from "./InputForm";
import ListItem from "./ListItem";
import defined_todos from "./ListItems.json";
import "./Lists.css";

function Lists() {
  const [todos, setTodos] = useState(defined_todos);
  // handling when the input will be submitted via inputForm
  const addTodoHandler = (todo) => {
    setTodos((prevTodo) => {
      return [...prevTodo, todo];
    });
  };
  // const showHandler = () => {};
  return (
    <>
      <div className="list__container">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </div>
      <InputForm onAddTodo={addTodoHandler} />
      {/* showInput={showHandler} */}
    </>
  );
}
export default Lists;
