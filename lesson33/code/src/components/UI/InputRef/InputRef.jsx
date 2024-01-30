import React, { forwardRef } from "react";
import style from "./InputRef.module.scss";

export const InputRef = forwardRef(
  (
    { id, name = "input", label = "label", inputHandler = () => {}, labelAttrs, inputAttrs },
    ref,
  ) => {
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
          ref={ref}
          className={style.input}
          {...inputAttrs}
        />
      </div>
    );
  },
);
