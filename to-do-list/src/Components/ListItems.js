import React, { useState } from "react";

import taskIcon from "../Images/bandcamp-brands.svg";
function ListItems(props) {
  const [checked, setChecked] = useState(localStorage.getItem(props.id));
  // state handling as per the input:checkbox
  const checkedHandler = (e) => {
    const isNotChecked = e.target.checked;
    if (isNotChecked) {
      setChecked(true);
      localStorage.setItem(props.id, true);
    } else {
      setChecked(false);
      localStorage.removeItem(props.id);
    }
  };
  return (
    <div className={checked ? "list completed" : "list not-completed"}>
      <p>{props.todo.title}</p>
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
