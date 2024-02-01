import { useEffect, useState } from "react";

export function WindowSizeWatcher({ children }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function resizeHandler() {
      setWindowSize(({
        height: window.innerHeight,
        width: window.innerWidth,
      }));
    }
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);
  return children(windowSize);
}
