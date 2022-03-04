import React, { useState } from "react";

function ListItem(props) {
  const [checked, setChecked] = useState(false);

  const checkedHandler = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false);
  };
  return (
    <div className={checked ? "list completed" : "list not__completed"}>
      <p>{props.todo.todo}</p>
      <input type="checkbox" onChange={checkedHandler} />
    </div>
  );
}

export default ListItem;
