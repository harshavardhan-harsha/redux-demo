import React from "react";
import { createStore, applyMiddleware } from "redux";
//import { composeWithDevTools } from "redux-devtools-extension";
//import thunk from "redux-thunk";
import logger from "redux-logger";
import "./App.css";

//const middleware = [thunk];

const initialState = {
  name: "Harsha",
  age: 30
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_NAME":
      return {
        ...state,
        name: payload
      };
    case "SET_AGE":
      return {
        ...state,
        age: payload
      };
    default:
      return state;
  }
};

//* Using third party logger middleware
const store = createStore(userReducer, applyMiddleware(logger));

//* Using redux devtools extensions and redux-thunk middleware
// const store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)));

store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch({
  type: "SET_NAME",
  payload: "Vardhan"
});

store.dispatch({
  type: "SET_AGE",
  payload: 35
});

const AppCopy = () => {
  return (
    <div className="App">
      <h1>Redux Demo</h1>
    </div>
  );
};

export default AppCopy;
