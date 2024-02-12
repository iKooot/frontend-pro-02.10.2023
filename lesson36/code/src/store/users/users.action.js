export const ADD_USER = "ADD_USER";
export const ADD_USERS = "ADD_USERS";
export const REMOVE_USER = "REMOVE_USER";
export const CLEAR_USERS = "CLEAR_USERS";

export const addUserAction = (user) => ({ type: ADD_USER, payload: user });
export const addUsersAction = (users) => ({ type: ADD_USERS, payload: users });
export const clearUsersAction = () => ({ type: CLEAR_USERS });
