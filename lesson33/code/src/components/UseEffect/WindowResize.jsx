import React, { useEffect, useState } from "react";

export function WindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log('render')
  useEffect(() => {
    const resizeHandler = (e) => {
      console.log('call resize handler')
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", resizeHandler);
    return () => {
      console.log('before unmount')
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div>
      <h3>Window resize</h3>
      <p>Width: {windowSize.width}</p>
      <p>Height: {windowSize.height}</p>
    </div>
  );
}
