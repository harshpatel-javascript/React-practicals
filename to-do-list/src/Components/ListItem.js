import React, { useState } from "react";

function ListItem({ todo }) {
  const [checked, setChecked] = useState(false);

  // state handling as per the input:checkbox
  const checkedHandler = (e) => {
    e.target.checked ? setChecked(true) : setChecked(false);
  };
  return (
    <div className={checked ? "list completed" : "list not-completed"}>
      <p>{todo.title}</p>
      <input
        className="list-checkbox"
        type="checkbox"
        onChange={checkedHandler}
      />
    </div>
  );
}

export default ListItem;
