import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../css/AddNewTask.css";
import plus from "../Images/plus.png";
import { addTodo } from "../redux/todo/todoAction";

function AddNewTask() {
  const [enteredTodo, setEnteredTodo] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const dispatch = useDispatch();
  function clickHandler() {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }
  // on form submission handler
  function addNewTaskHandler(event) {
    let { preventDefault } = event;
    preventDefault.call(event);
    // error handling for not giving input
    if (enteredTodo === "") {
      alert("Please enter the todo.");
    } else {
      dispatch(addTodo(enteredTodo));
      setEnteredTodo("");
    }
  }
  const keyPressHandler = (event) => {
    if (event.code === "Escape") {
      setIsClicked(false);
    }
  };
  return (
    <div className="add-new-task-container">
      {isClicked ? (
        <form className="form-container" onSubmit={addNewTaskHandler}>
          <input
            type="text"
            value={enteredTodo}
            onKeyDown={keyPressHandler}
            onChange={({ target }) => setEnteredTodo(target.value)}
            placeholder="Enter Your Task"
          />
        </form>
      ) : (
        <button className="btn" onClick={clickHandler}>
          <img src={plus} alt="plus" />
        </button>
      )}
    </div>
  );
}

export default AddNewTask;
