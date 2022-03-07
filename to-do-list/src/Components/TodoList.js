import React from "react";

import ListItems from "./ListItems";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <>
      <div className="list-container">
        {todos && todos.map((todo) => <ListItems key={todo.id} todo={todo} />)}
      </div>
    </>
  );
}
export default TodoList;
