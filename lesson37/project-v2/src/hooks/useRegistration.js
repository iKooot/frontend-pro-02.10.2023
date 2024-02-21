import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthSlice, signUpThunk } from "../ducks/auth.duck";
import { LocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";
export function useRegistration() {
  const [body, setBody] = useState(null);
  const { error, status, token } = useSelector(selectAuthSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (data) => {
    setBody(data);
  };

  useEffect(() => {
    if (!body) return;

    const request = dispatch(signUpThunk(body));

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
    submitHandler,
  };
}
