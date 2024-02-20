import React, { useRef } from "react";
import {useDispatch} from "react-redux";

export function UserForm() {
  const nameRef = useRef();
  const surnameRef = useRef();
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();

    if (!nameRef.current.value && !surnameRef.current.value) {
      console.warn("invalid value");
      return;
    }
    const preparedData = {
      id: new Date().getTime(),
      [nameRef.current.name]: nameRef.current.value,
      [surnameRef.current.name]: surnameRef.current.value,
    };

  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" ref={nameRef} name="name" />
      <input type="text" ref={surnameRef} name="surname" />
      <button>Add user</button>
    </form>
  );
}
