import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersThunk, selectUsersSlice } from "../ducks/users.duck";

export function useFetchUsers() {
  const dispatch = useDispatch();
  const { status, error, users } = useSelector(selectUsersSlice);

  useEffect(() => {
    const requestPromise = dispatch(fetchUsersThunk());

    return () => {
      requestPromise.abort();
    };
  }, [dispatch]);

  return {
    status,
    error,
    users,
  };
}
