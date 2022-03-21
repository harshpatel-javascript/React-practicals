import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
} from "./types";

export const passDataToCard = ({ data }) => {
  return {
    type: PASS_DATA_TO_CARD,
    payload: {
      id: data.id,
      name: data.name,
      email: data.email,
      status: data.status,
      plan: data.plan,
      avatar: data.avatar,
      progressValue: data.progressValue,
      reviewed: data.reviewed,
      clicks: data.clicks,
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
