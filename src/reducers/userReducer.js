import { SET_AGE, SET_NAME } from "../actions/types";

const initialState = {
  name: "Harsha",
  age: 30
};
const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: payload
      };
    case SET_AGE:
      return {
        ...state,
        age: payload
      };

    default:
      return state;
  }
};

export default userReducer;
