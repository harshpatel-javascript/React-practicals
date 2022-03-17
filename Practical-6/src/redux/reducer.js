import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
} from "./types";
import { userData } from "../components/userData";

const initialState = {
  cardData: false,
  definedData: userData,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PASS_DATA_TO_CARD:
      return {
        cardData: action.payload,
        definedData: userData,
      };
    case TOGGLE_STATUS:
      // const { id } = action.payload;
      return {
        ...state,
        definedData: state.definedData.map((data) => {
          if (data.id === action.payload.id) {
            return {
              ...data,
              status: action.payload.status,
            };
          }
          return data;
        }),
      };
    case MOUSE_LEAVE:
      return {
        ...state,
        definedData: userData,
      };
    case DELETE_USER:
      const { id } = action.payload;
      return {
        ...state,
        definedData: state.definedData.filter((data) => data.id !== id, 1),
      };
    default:
      return state;
  }
};

export default reducer;
