import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import todoReducer from "./todo/todoReducer";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    localStorage.setItem("applicationState", JSON.stringify(getState()));
    return result;
  };
};
const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")); // re-hydrate the store
  }
};
//arguments for reducer (reducer, preLoadedState,enhancer)
const store = createStore(
  todoReducer,
  reHydrateStore(),
  applyMiddleware(localStorageMiddleware, logger)
);

export default store;
