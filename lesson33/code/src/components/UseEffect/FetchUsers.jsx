import React, { useEffect, useState } from "react";

export function FetchUsers() {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    async function getUsers() {
      setStatus("loading");
      const resp = await fetch("https://reqres.in/api/users", {
        signal: controller.signal,
      });
      const { data } = await resp.json();

      setData(data);
      setStatus("success");
    }

    try {
      getUsers();
    } catch (e) {
      setError(e);
      setStatus("error");
    }

    return () => {
      controller.abort();
    };
  }, []);

  if (status === "error") return <p>{JSON.stringify(error)}</p>;
  if (status === "loading") return <p>Loading...</p>;

  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>{el.email}</li>
      ))}
    </ul>
  );
}
