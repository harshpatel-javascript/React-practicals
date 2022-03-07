import React, { useState } from "react";

import "./AddNewTask.css";
import plus from "../Images/plus.png";

function AddNewTask({ onAddTodo }) {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler(e) {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }
  const [enteredTodo, setEnteredTodo] = useState([]);
  // on form submission handler
  function submitHandler(event) {
    const {preventDefault} = event;
    preventDefault();
    // error handling for not giving input
    if (enteredTodo === "") {
      alert("Please enter the todo.");
    } else {
      const defaultTodos = {
        id: Math.random().toString(),
        title: enteredTodo,
      };
      onAddTodo(defaultTodos);
      setEnteredTodo("");
    }
  }
  return (
    <div className="add-new-task-container">
      <form
        className={isClicked ? "form-container" : "form-container-hidden"}
        onSubmit={submitHandler}
      >
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
      </form>
      <button className="btn" onClick={clickHandler}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}

export default AddNewTask;
