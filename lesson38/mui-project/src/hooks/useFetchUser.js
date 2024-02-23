import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk, selectUserSlice } from "../ducks/user.duck";

export function useFetchUser(id) {
  const dispatch = useDispatch();
  const { error, status, user } = useSelector(selectUserSlice);

  useEffect(() => {
    const request = dispatch(fetchUserThunk(id));

    return () => {
      request.abort();
    };
  }, [id, dispatch]);

  return {
    status,
    error,
    user,
  };
}
