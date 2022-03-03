import React from "react";
import "./Button.css";
import plus from "../Images/icons8-plus-48.png";

function Button() {
  return (
    <>
      <div className="button__container">
        <button className="button__container-btn">
          <img src={plus} alt="plus" />
        </button>
      </div>
    </>
  );
}

export default Button;
