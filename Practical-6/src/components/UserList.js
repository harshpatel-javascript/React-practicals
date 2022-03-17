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
        data.name,
        data.email,
        data.status,
        data.plan,
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
          <p className="user-name">{data.name}</p>
          <p className="user-email">{data.email}</p>
        </div>
      </div>
      {data.status === "Active" ? (
        <div className="user-status">Active</div>
      ) : (
        <div className="user-status">
          <select name="status" id="status" onChange={dropDownMenuHandler}>
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        </div>
      )}
      {data.access === "Owner" ? (
        <div className="user-access">Owner</div>
      ) : (
        <div className="user-access">
          {data.access === "Read" ? (
            <select name="access" id="access">
              <option value="Read" defaultValue>
                Read
              </option>
              <option value="manager">Manager</option>
            </select>
          ) : (
            <select name="access" id="access">
              <option value="manager" defaultValue>
                Manager
              </option>
              <option value="Read">Read</option>
            </select>
          )}
        </div>
      )}
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
