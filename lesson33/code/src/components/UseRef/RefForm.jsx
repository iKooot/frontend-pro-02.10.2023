import React, { useEffect, useRef } from "react";
import { Input, Button, InputRef } from "../UI";
import style from "./RefForm.module.scss";

export function RefForm() {
  const nameRef = useRef(null);
  const surNameRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      name: nameRef.current.value,
      surName: surNameRef.current.value,
    };
    console.log(data);
  };

  useEffect(() => {
    console.log(nameRef.current.value);
  }, []);

  return (
    <form
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "12px",
        padding: "8px",
      }}
      onSubmit={submitHandler}
    >
      <Input inputRef={nameRef} name="name" label="Enter name" />
      <InputRef ref={surNameRef} name="surName" label="Enter sure name" />
      <Button attrs={{ type: "submit", className: style.button }}>
        Submit
      </Button>
    </form>
  );
}
