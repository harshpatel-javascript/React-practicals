import axios from "axios";
import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CHANGE_PAGE,
} from "./types";

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

export const passDataToCard = (data) => {
  return {
    type: PASS_DATA_TO_CARD,
    payload: data,
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

export const handlePage = (page, data) => {
  return {
    type: CHANGE_PAGE,
    payload: {
      activePage: page,
    },
  };
};

export const fetchUsers = (page) => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get(`${process.env.staging.REACT_APP_API_URL}?page=${page}`)
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => dispatch(fetchUsersFailure(error.message)));
  };
};
