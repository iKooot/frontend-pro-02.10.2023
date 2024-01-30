import React, { useEffect, useLayoutEffect } from "react";

export function UseLayoutEffect() {
  useEffect(() => {
    // for (let i = 0; i < 100_000; i++) {
    //   console.log("usesEffect", i);
    // }
    console.log(document.body);
    console.log("this is useEffect");
  }, []);

  useLayoutEffect(() => {
    for (let i = 0; i < 100_000; i++) {
      console.log("layoutEffect", i);
    }
    console.log(document.body);
    console.log("this is layoutEffect");
  }, []);

  return (
    <div>
      <h2>Hello layout effect</h2>
      <button onClick={() => console.log("click")}>click</button>
    </div>
  );
}
