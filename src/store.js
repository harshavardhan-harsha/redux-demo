import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
const middleware = [thunk];

// create store
const store = createStore(userReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
