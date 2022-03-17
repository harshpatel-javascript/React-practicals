import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./types";
import axios from "axios";
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

export const passDataToCard = (
  empId,
  empFirstName,
  empLastName,
  empEmail,
  empStatus,
  empAvatar,
  empProgressValue,
  empReviewed,
  empClicks
) => {
  return {
    type: PASS_DATA_TO_CARD,
    payload: {
      id: empId,
      name: empFirstName + " " + empLastName,
      email: empEmail,
      status: empStatus,
      avatar: empAvatar,
      progressValue: empProgressValue,
      reviewed: empReviewed,
      clicks: empClicks,
    },
  };
};

export const toggleStatus = (id, status) => {
  return {
    type: TOGGLE_STATUS,
    payload: {
      id: id,
      status: status,
    },
  };
};

export const onMouseLeave = () => {
  return {
    type: MOUSE_LEAVE,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: {
      id: id,
    },
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("https://reqres.in/api/users?page=1")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};
