import { TOGGLE_TODO, ADD_TODO, REMOVE_TODO } from "./todoTypes";

export const addTodo = (task) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime(),
      title: task,
      isCompleted: false,
    },
  };
};

export const completedTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id: id,
    },
  };
};

export const deleteTodo = (currentTime, setupedTime) => {
  return {
    type: REMOVE_TODO,
    payload: {
      date: currentTime,
      setupedTime: setupedTime,
    },
  };
};
