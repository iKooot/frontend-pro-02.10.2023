import React, { useEffect, useState } from "react";

export function RenderCounter() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log('RenderCounter body log')

  useEffect(() => {
    console.log("RenderCounter mounted useEffect dont have deps");
  });

  useEffect(() => {
    console.log("RenderCounter mounted useEffect have deps []");
  }, []);

  useEffect(() => {
    console.log("RenderCounter mounted useEffect have deps [count]");
  }, [count]);

  return (
    <div>
      <p>this component rendered {count} times</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Render
      </button>
      <button onClick={() => setCount2((prevState) => prevState + 1)}>
        Render2
      </button>
    </div>
  );
}
