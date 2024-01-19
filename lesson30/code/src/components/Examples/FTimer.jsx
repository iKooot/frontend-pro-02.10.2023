import React, { useState } from "react";
import PropTypes from "prop-types";

export function FTimer({ children, text, isBoolean }) {
  const [time, setTime] = useState(new Date());
  function tick() {
    setTime(new Date());
  }

  setInterval(tick, 2000);
  return (
    <div>
      <p>{text}</p>
      {isBoolean && `This is boolean prop = ${isBoolean}`}
      <p>This time ${time.toISOString()}</p>
      {children}
    </div>
  );
}

FTimer.propTypes = {
  text: PropTypes.string.isRequired,
  isBoolean: PropTypes.bool.isRequired,
  children: PropTypes.node,
};

FTimer.defaultProps = {
  text: "Hello F-Timer",
  isBoolean: true,
};
