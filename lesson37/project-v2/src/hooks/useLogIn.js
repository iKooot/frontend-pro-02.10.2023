import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocalStorage } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { signInThunk, selectAuthSlice } from "../ducks/auth.duck";

export function useLogIn() {
  const [body, setBody] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, token, status } = useSelector(selectAuthSlice);

  const submitHandler = (data) => {
    setBody(data);
  };

  useEffect(() => {
    if (!body) return;

    const request = dispatch(signInThunk(body));

    return () => {
      request.abort();
    };
  }, [body, dispatch]);

  useEffect(() => {
    if (status === "success" && token) {
      LocalStorage.set(LocalStorage.USER_KEY, token);
      navigate("/");
    }
  }, [status, token, navigate]);

  return {
    status,
    error,
    token,
    submitHandler,
  };
}
