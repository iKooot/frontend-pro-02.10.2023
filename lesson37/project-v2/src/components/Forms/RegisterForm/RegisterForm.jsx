import React, { useRef } from "react";
import { Button, Input } from "../../UI";
import style from "./Register.module.scss";

export function RegisterForm({ onSubmit }) {
  const email = useRef(null);
  const password = useRef(null);
  const { form } = style;

  function submitHandler(e) {
    e.preventDefault();
    onSubmit({ email: email.current.value, password: password.current.value });
  }

  return (
    <form className={form} onSubmit={submitHandler}>
      <Input ref={email} label="Enter your email" name="email" />
      <Input
        ref={password}
        label="Enter your pass"
        type="password"
        name="password"
      />
      <Button type="submit">Register</Button>
    </form>
  );
}
