import React, { useState } from "react";

// const data = {
//     counter: 0
// }

export function Initial() {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  // Dont do it!
  // data.counter++
  //   if (Math.random() > 0.5) {
  //       const [counter, setCounter] = useState(0);
  //   }
  //   for (let i = 0; ;i++) {
  //       const [counter, setCounter] = useState(0);
  //   }
  //   function handler() {
  //       const [counter, setCounter] = useState(0);
  //   }
  return (
    <div>
      <h3>Hello use state</h3>
      <p>this component count {counter} times</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <p>this component isOpen value is {isOpen.toString()}</p>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      <p>this component search value is {search}</p>
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
    </div>
  );
}
