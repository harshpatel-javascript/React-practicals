import React from "react";
import { Lock, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import {
  passDataToCard,
  deleteUser,
  toggleStatus,
  onMouseLeave,
} from "../redux/action";

import "../css/UserList.css";
function UserList({ data }) {
  const dispatch = useDispatch();
  const onMouseEnterHandler = () => {
    dispatch(
      passDataToCard(
        data.id,
        data.last_name,
        data.first_name,
        data.email,
        data.status,
        data.avatar,
        data.progressValue,
        data.reviewed,
        data.clicks
      )
    );
  };
  const onMouseLeaveHandler = () => {
    dispatch(onMouseLeave());
  };
  const clickHandler = () => {
    dispatch(deleteUser(data.id));
  };
  const dropDownMenuHandler = (e) => {
    const { value } = e.target;
    dispatch(toggleStatus(data.id, value));
  };
  return (
    <div className="user-item">
      <div
        className="user-details"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img src={data.avatar} alt="user" className="user-img" />
        <div className="user-detail">
          <p className="user-name">{data.first_name + " " + data.last_name}</p>
          <p className="user-email">{data.email}</p>
        </div>
      </div>
      <div className="user-status">
        <select name="status" id="status" onChange={dropDownMenuHandler}>
          <option value="inactive" defaultValue>
            Inactive
          </option>
          <option value="active">Active</option>
        </select>
      </div>
      <div className="user-access">
        <select name="access" id="access">
          <option value="Read" defaultValue>
            Read
          </option>
          <option value="manager">Manager</option>
        </select>
      </div>
      {data.access === "Owner" ? (
        <div className="access-icon">
          <Lock className="icon" />
        </div>
      ) : (
        <div className="access-icon">
          <Trash2 className="icon" onClick={clickHandler} />
        </div>
      )}
    </div>
  );
}

export default UserList;
