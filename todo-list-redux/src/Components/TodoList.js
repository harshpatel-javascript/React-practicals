import React from "react";

import ListItems from "./ListItem";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <div className="list-container">
      {todos.length < 1 ? (
        <div className="empty-statement">No Todo List for Today.</div>
      ) : (
        todos.map((todo) => <ListItems key={todo.id} todo={todo} />)
      )}
    </div>
  );
}
export default TodoList;
