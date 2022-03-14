import React from "react";
import { useSelector } from "react-redux";

import TodoListItem from "./TodoListItem";
import "../css/TodoList.css";

function TodoList() {
  const todos = useSelector((state) => {
    return state.todos;
  });
  return (
    <div className="list-container">
      {todos.length < 1 ? (
        <div className="empty-statement">No Todo List for Today.</div>
      ) : (
        todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            isCompleted={todo.isCompleted}
          />
        ))
      )}
    </div>
  );
}
export default TodoList;
