import { useContext } from "react";
import { UserInfoDispatchContext } from "../Context";
import { RESET_USER } from "../services/state/userInfo";
import { LocalStorage } from "../utils";

export function useLogOut() {
  const dispatch = useContext(UserInfoDispatchContext);
  function logOutHandler() {
    dispatch({ type: RESET_USER });
    LocalStorage.reset();
  }

  return logOutHandler;
}
