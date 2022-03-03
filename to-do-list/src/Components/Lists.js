import React from "react";
import "./Lists.css";
function Lists() {
  return (
    <div className="list__container">
      <div className="list">
        <p>begin Promotion</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" defaultChecked />
          <span className="checkmark" />
        </label>
      </div>
      <div className="list">
        <p>Read an article</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark" />
        </label>
      </div>
      <div className="list">
        <p>try not to fall asleep</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="list">
        <p>watch 'sherlok'</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="list">
        <p>begin QA for the product</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="list">
        <p>go for a walk</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="list">
        <p>go for a walk</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
      <div className="list">
        <p>go for a walk</p>
        <label htmlFor="" className="list__checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default Lists;
