import React from "react";
import "./Button.css";
import plus from "../Images/icons8-plus-48.png";

function Button(props) {
  // const [showInput, setShowInput] = useState(false);
  function clickHandler() {
    console.log("I was clicked");
  }
  return (
    <div className="button__container">
      <button className="button__container-btn" onClick={clickHandler}>
        <img src={plus} alt="plus" />
      </button>
    </div>
  );
}

export default Button;
