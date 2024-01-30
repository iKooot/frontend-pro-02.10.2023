import React from "react";
import style from "./Input.module.scss";

export function Input({
  id,
  label = "label",
  name = "name",
  inputHandler = () => {},
  inputRef = () => {},
  labelAttrs,
  inputAttrs,
}) {
  const identifier = id ?? `${name}-${Math.random() * 100}`;
  return (
    <div className={style.container}>
      <label htmlFor={identifier} {...labelAttrs}>
        {label}
      </label>
      <input
        type="text"
        id={identifier}
        name={name}
        onInput={inputHandler}
        ref={inputRef}
        className={style.input}
        {...inputAttrs}
      />
    </div>
  );
}
