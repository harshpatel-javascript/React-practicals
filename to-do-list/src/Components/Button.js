import React, { useState } from "react";

import "./Button.css";
import plus from "../Images/icons8-plus-48.png";

function Button(props) {
  const [isClicked, setIsClicked] = useState(false);
  function clickHandler(e) {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }
  const [enteredTodo, setEnteredTodo] = useState([]);
  // on form submission handler
  function submitHandler(e) {
    e.preventDefault();
    // error handling for not giving input
    if (enteredTodo === "") {
      alert("Please enter the todo.");
    } else {
      const defaultTodos = {
        id: Math.random().toString(),
        todo: enteredTodo,
      };
      props.onAddTodo(defaultTodos);
      setEnteredTodo("");
    }
  }
  return (
    <div className="button-container">
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

export default Button;
