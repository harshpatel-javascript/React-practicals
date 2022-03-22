import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
  CHANGE_PAGE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  cardData: false,
  error: "",
  fetchedData: [],
  activePage: 1,
};

const reducer = (state = initialState, action) => {
  console.log();
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        fetchedData: action.payload.data,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case PASS_DATA_TO_CARD:
      return {
        ...state,
        cardData: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        activePage: action.payload.activePage,
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        fetchedData: state.definedData.map((data) => {
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
      };
    case DELETE_USER:
      const { id } = action.payload;
      return {
        ...state,
        fetchedData: state.definedData.filter((data) => data.id !== id, 1),
      };
    default:
      return state;
  }
};

export default reducer;
