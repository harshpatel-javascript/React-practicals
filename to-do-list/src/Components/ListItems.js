import React, { useState } from "react";

import taskIcon from "../Images//task-completed-icon.svg";
function ListItems({ todo }) {
  const [checked, setChecked] = useState(localStorage.getItem(todo.id));
  // state handling as per the input:checkbox
  const checkedHandler = (e) => {
    const isNotChecked = e.target.checked;
    if (isNotChecked) {
      setChecked(true);
      localStorage.setItem(todo.id, true);
    } else {
      setChecked(false);
      localStorage.removeItem(todo.id);
    }
  };
  return (
    <div className={checked ? "list completed" : "list not-completed"}>
      <p>{todo.title}</p>
      <input
        className="list-checkbox"
        type="checkbox"
        onChange={checkedHandler}
      />
      <img
        className={checked ? "task-icon show" : "task-icon hidden"}
        src={taskIcon}
        alt=""
      />
    </div>
  );
}

export default ListItems;
