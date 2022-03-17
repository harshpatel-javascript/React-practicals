import React from "react";
import { useDispatch } from "react-redux";

import { completedTodo } from "../redux/todo/todoAction";
import taskIcon from "../images/task-completed-icon.jpg";

function TodoListItem({ todo, isCompleted }) {
  const dispatch = useDispatch();
  // state handling as per the input:checkbox
  const checkedHandler = () => {
    dispatch(completedTodo(todo.id));
  };
  return (
    <div className={isCompleted ? "list completed" : "list not-completed"}>
      <p>{todo.title}</p>
      <input
        className="list-checkbox"
        type="checkbox"
        defaultChecked
        onChange={checkedHandler}
      />
      <img
        className={isCompleted ? "task-icon show" : "task-icon hidden"}
        src={taskIcon}
        alt="taskicon"
      />
    </div>
  );
}

export default TodoListItem;
