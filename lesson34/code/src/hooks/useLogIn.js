import { useContext, useEffect, useState } from "react";
import { UserInfoContext, UserInfoDispatchContext } from "../Context";
import {
  ERROR,
  LOADING,
  SUCCESS,
  ADD_USER,
  AUTH_USER,
} from "../services/state/userInfo";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils";

export function useLogIn() {
  const [body, setBody] = useState(null);
  const { loading, error, token } = useContext(UserInfoContext);
  const dispatch = useContext(UserInfoDispatchContext);
  const navigate = useNavigate();

  const submitHandler = (data) => {
    setBody(data);
  };

  useEffect(() => {
    if (!body) return;
    const controller = new AbortController();
    async function logInUser() {
      try {
        dispatch({ type: LOADING });
        const resp = await fetch("https://reqres.in/api/login", {
          signal: controller.signal,
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await resp.json();

        if (resp.status >= 400) {
          dispatch({ type: ERROR, payload: data.error });
          return;
        }

        dispatch({ type: SUCCESS, payload: data.token });
        dispatch({ type: ADD_USER, payload: body });
        dispatch({ type: AUTH_USER, payload: true });
        LocalStorage.set(LocalStorage.USER_KEY, data.token);
        navigate("/");
      } catch (e) {
        dispatch({ type: ERROR, payload: e.message });
      }
    }

    logInUser();

    return () => {
      controller.abort();
    };
  }, [body, dispatch, navigate]);

  return {
    loading,
    error,
    token,
    submitHandler,
  };
}
