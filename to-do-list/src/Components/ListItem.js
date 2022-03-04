import React, { useState } from "react";

function ListItem(props) {
  const [checked, setChecked] = useState(false);

  // state handling as per the input:checkbox
  const checkedHandler = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false);
  };
  return (
    <div className={checked ? "list completed" : "list not-completed"}>
      <p>{props.todo.name}</p>
      <input type="checkbox" onChange={checkedHandler} />
    </div>
  );
}

export default ListItem;
