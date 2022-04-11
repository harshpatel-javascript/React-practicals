import { AUTHENICATED, LOG_OUT } from "./types";

export const authenticated = (user) => {
  return {
    type: AUTHENICATED,
    payload: user,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

