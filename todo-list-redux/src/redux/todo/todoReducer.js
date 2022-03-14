import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./todoTypes";

export const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { title, isCompleted } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: new Date().getTime(),
            title: title,
            isCompleted: isCompleted,
          },
        ],
      };
    case TOGGLE_TODO:
      const { id } = action.payload;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== id) {
            return todo;
          }
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }),
      };
    case REMOVE_TODO:
      const { date, setupedTime } = action.payload;
      if (date === setupedTime) {
        return {
          ...state,
          todos: [...state.todos],
        };
      }
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};
export default todoReducer;
