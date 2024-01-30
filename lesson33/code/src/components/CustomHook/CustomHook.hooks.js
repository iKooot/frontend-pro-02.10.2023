import { useCallback, useEffect, useState } from "react";

export function useCustomHook(pattern) {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(null);

  const changeHandler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    if (value === "") {
      setValid(null);
      return;
    }
    setValid(pattern.test(value));
  }, [value]);

  return {
    value,
    valid,
    changeHandler,
  };
}
