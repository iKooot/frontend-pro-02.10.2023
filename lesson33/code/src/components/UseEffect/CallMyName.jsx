import React, { useEffect, useState } from "react";

export function CallMyName() {
  const [name, setName] = useState("Serhii");

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`hello ${name}`);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [name]);

  return (
    <div>
      <p>My name is {name}</p>
      {["Serhii", "Jhon", "Hanna"].map((el) => (
        <button key={el} onClick={() => setName(el)}>
          {el}
        </button>
      ))}
    </div>
  );
}
