// import { combineReducers, createStore } from "redux";
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import userInfoReducer from "./userInfo/userInnfo.reducer";
// import usersReducer from "./users/users.reducer";
//
// const reducers = combineReducers({
//   userInfo: userInfoReducer,
//   users: usersReducer,
// });
//
// export const store = createStore(reducers, devToolsEnhancer());

import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import userInfoReducer from "./userInfo/userInnfo.reducer";
import usersReducer from "./users/users.reducer";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  userInfo: userInfoReducer,
  users: usersReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);
