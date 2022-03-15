import React from "react";
import { Lock, Trash2 } from "react-feather";

function UserList({ data }) {
  const changeHandler = (event) => {
    // console.log(event.target.className);
  };
  return (
    <div className="user-item" onMouseEnter={changeHandler}>
      <div className="user-details">
        <img src={data.avatar} alt="user" className="user-img" />
        <div className="user-detail">
          <p className="user-name">{data.name}</p>
          <p className="user-email">{data.email}</p>
        </div>
      </div>
      {data.status === "Active" ? (
        <div className="user-status">Active</div>
      ) : (
        <div className="user-status">
          <select name="status" id="status">
            <option value="active">Active</option>
            <option value="inactive" defaultValue>
              Inactive
            </option>
          </select>
        </div>
      )}
      {data.access === "Owner" ? (
        <div className="user-access">Owner</div>
      ) : (
        <div className="user-access">
          <select name="access" id="access">
            <option value="manager">Manager</option>
            <option value="Read">Read</option>
          </select>
        </div>
      )}
      {data.access === "Owner" ? (
        <div>
          <Lock className="icon" />
        </div>
      ) : (
        <div>
          <Trash2 className="icon" />
        </div>
      )}
    </div>
  );
}

export default UserList;
