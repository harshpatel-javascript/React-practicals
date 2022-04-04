import {
  PASS_DATA_TO_CARD,
  TOGGLE_STATUS,
  MOUSE_LEAVE,
  DELETE_USER,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./types";

const initialState = {
  loading: false,
  cardData: false,
  error: "",
  fetchedData: [],
  totalPage: 0,
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
        loading: false,
        totalPage: action.payload.total_pages,
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
        cardData: action.payload.data,
      };
    case TOGGLE_STATUS:
      return {
        ...state,
        fetchedData: state.fetchedData.map((data) => {
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
        fetchedData: state.fetchedData.filter((data) => data.id !== id),
      };
    default:
      return state;
  }
};

export default reducer;
