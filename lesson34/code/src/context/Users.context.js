import { createContext } from "react";
import { initialUsersState } from "../services";

export const UsersContext = createContext(initialUsersState);
export const UsersDispatchContext = createContext(null);

export const UsersContextProvider = UsersContext.Provider;
export const UsersDispatchProvider = UsersDispatchContext.Provider;
