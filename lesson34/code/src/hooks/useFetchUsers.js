import { useContext, useEffect } from "react";
import { LOADING, ERROR, SUCCESS } from "../services";
import { UsersContext, UsersDispatchContext } from "../context";

export function useFetchUsers() {
  const { loading, error, users } = useContext(UsersContext);
  const dispatch = useContext(UsersDispatchContext);

  useEffect(() => {
    const controller = new AbortController();
    async function getUsers() {
      try {
        dispatch({ type: LOADING });
        const resp = await fetch("https://reqres.in/api/users", {
          signal: controller.signal,
        });

        if (!resp.ok) dispatch({ type: ERROR, payload: "Server Error" });
        const { data } = await resp.json();

        dispatch({ type: SUCCESS, payload: data });
      } catch (e) {
        dispatch({ type: ERROR, payload: e.message });
      }
    }

    getUsers();

    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return {
    loading,
    error,
    users,
  };
}
