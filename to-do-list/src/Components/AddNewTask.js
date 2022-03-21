import React, { useState } from "react";

import "./AddNewTask.css";
import plus from "../Images/plus.png";

function AddNewTask({ onAddTodo }) {
  const [enteredTodo, setEnteredTodo] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler() {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }
  // on form submission handler
  function addNewTaskHandler(event) {
    event.preventDefault();
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
  const keyPressHandler = (event) => {
    // console.log(event.code);
    if (event.code === "Escape") {
      setIsClicked(false);
    }
  };
  return (
    <div className="add-new-task-container">
      {/* not like this with conditional rendering we have to specify like if no todo list then button otherwise button */}
      <form
        className={isClicked ? "form-container" : "form-container-hidden"}
        onSubmit={addNewTaskHandler}
      >
        <input
          type="text"
          value={enteredTodo}
          onKeyDown={keyPressHandler}
          onChange={(e) => setEnteredTodo(e.target.value)}
          placeholder="Enter Your Task"
        />
      </form>
      <button
        className={isClicked ? "btn-hidden" : "btn"}
        onClick={clickHandler}
      >
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}

export default AddNewTask;
