import React from "react";
import { useCustomHook } from "./CustomHook.hooks";

export function CustomHook() {
  const { valid, value, changeHandler } = useCustomHook(/^\w+$/);

  return (
    <form>
      <div>
        <input value={value} onChange={changeHandler}/>
        {valid === false && <p>value is invalid</p>}
      </div>
    </form>
  );
}
