import React, { useRef } from "react";
import { Button, Input } from "../../UI";
import style from './Register.module.scss';

export function RegisterForm({ onSubmit }) {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const pass = useRef(null);
  const { form } = style;

  function submitHandler(e) {
    e.preventDefault();
    onSubmit({email, pass});
  }

  return (
    <form className={form} onSubmit={submitHandler}>
      <Input ref={firstName} label="Enter your first name" name="firstName"/>
      <Input ref={lastName} label="Enter your last name" name="lastName"/>
      <Input ref={email} label="Enter your email" name="email"/>
      <Input ref={pass} label="Enter your pass" type="password" name="password"/>
      <Button type="submit">Register</Button>
    </form>
  );
}
