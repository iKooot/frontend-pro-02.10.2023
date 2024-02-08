import { useEffect, useState } from "react";

export function useFetchUser(id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  useEffect(() => {
    const controller = new AbortController();
    async function getUser() {
      try {
        setLoading(true);
        const resp = await fetch(`https://reqres.in/api/user/${id}`, {
          signal: controller.signal,
        });

        const data = await resp.json();

        if (resp.status >= 400) {
          setLoading(false);
          setError(data.error);
          return;
        }

        setLoading(false);
        setUser(data.data);
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    }

    getUser();

    return () => {
      controller.abort();
    };
  }, [id]);

  return {
    // loading,
    // error,
    user,
  };
}
