import { SET_AGE, SET_NAME } from "./types";

export const setName = name => dispatch => {
  dispatch({
    type: SET_NAME,
    payload: name
  });
};

export const setAge = age => dispatch => {
  dispatch({
    type: SET_AGE,
    payload: age
  });
};
