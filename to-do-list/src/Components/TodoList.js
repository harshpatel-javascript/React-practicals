import React from "react";

// import InputForm from "./InputForm";
import ListItem from "./ListItem";
import "./TodoList.css";

function TodoList({ todos }) {
  return (
    <>
      <div className="list-container">
        {todos && todos.map((todo) => <ListItem key={todo.id} todo={todo} />)}
      </div>
    </>
  );
}
export default TodoList;
