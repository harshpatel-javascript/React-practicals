import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
} from "./types";

export const passDataToCard = (
  empId,
  empName,
  empEmail,
  empStatus,
  empPlan,
  empAvatar,
  empProgressValue,
  empReviewed,
  empClicks
) => {
  return {
    type: PASS_DATA_TO_CARD,
    payload: {
      id: empId,
      name: empName,
      email: empEmail,
      status: empStatus,
      plan: empPlan,
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
