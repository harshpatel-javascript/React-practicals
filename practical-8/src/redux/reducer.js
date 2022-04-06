import { AUTHENICATED, LOG_OUT } from "./types";
const initialState = {
  isAuthenticated: false,
  userData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENICATED:
      return {
        ...state,
        isAuthenticated: true,
        userData: action.payload,
      };
    case LOG_OUT:
      return {
        isAuthenticated: false,
        userData: {},
      };
    default:
      return state;
  }
};
