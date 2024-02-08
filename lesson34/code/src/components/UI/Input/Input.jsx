import React, { forwardRef } from "react";
import style from "./Input.module.scss";

export const Input = forwardRef(
  (
    {
      label = "input",
      type = "text",
      onChange,
      id = new Date().getTime(),
      name = "input",
      className,
      ...rest
    },
    ref,
  ) => {
    const { container } = style;
    const compId = `${id}-${name}`;
    return (
      <div className={container}>
        <label htmlFor={compId}>{label}</label>
        <input
          id={compId}
          {...(onChange ? { onChange } : { ref })}
          type={type}
          className={`${className ?? ''}`}
          {...rest}
        />
      </div>
    );
  },
);
