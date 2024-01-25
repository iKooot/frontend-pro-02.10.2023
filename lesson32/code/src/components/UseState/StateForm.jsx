import React, { useState } from "react";

function createInitialState() {
  return {
    firstName: { value: "", valid: null, touched: false },
    lastName: { value: "", valid: null, touched: false },
  };
}
export function StateForm() {
  const [data, setData] = useState(createInitialState());
  console.log(data);

  function submitHandler(e) {
    e.preventDefault();

    console.log(data);

    setData(createInitialState());
  }

  function changeHandler(e) {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: {
        value: e.target.value,
        valid: e.target.value !== "",
        touched: true,
      },
    }));
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input type="text" name="firstName" onChange={changeHandler} />
        {data.firstName.valid === false && <p>Please enter first name</p>}
      </div>
      <div>
        <input type="text" name="lastName" onChange={changeHandler} />
        {data.lastName.valid === false && <p>Please enter last name</p>}
      </div>
      <button
        disabled={
          !data.firstName.touched ||
          !data.lastName.touched ||
          !data.firstName.valid ||
          !data.lastName.valid
        }
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
