import { createContext } from "react";
import { initialUserInfoState } from "../services/state/userInfo";

export const UserInfoContext = createContext(initialUserInfoState);
export const UserInfoDispatchContext = createContext(null);

export const UserInfoContextProvider = UserInfoContext.Provider;
export const UserInfoDispatchProvider = UserInfoDispatchContext.Provider;
