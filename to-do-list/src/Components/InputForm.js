import React, { useState } from "react";

import "./InputForm.css";

function InputForm(props) {
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
  const showHandler = () => {
    console.log("I am from lists");
  };
  return (
    <form
      className="form-container"
      action=""
      onSubmit={submitHandler}
      showInput={showHandler}
    >
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
    </form>
  );
}

export default InputForm;
