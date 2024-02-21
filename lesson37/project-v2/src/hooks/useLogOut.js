import { LocalStorage } from "../utils";
import { clearAuth } from "../ducks/auth.duck";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logOutHandler() {
    dispatch(clearAuth());
    LocalStorage.reset();
    navigate("/");
  }

  return logOutHandler;
}
