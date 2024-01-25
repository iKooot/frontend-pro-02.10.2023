import React, { useState } from "react";
import {CRef, CAnimation, CForm, UseState} from "./components";

function App() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      {/*<div>*/}
      {/*  {isOpen && <CRef />}*/}
      {/*  <button onClick={() => setIsOpen((prevState) => !prevState)}>*/}
      {/*    Toggle ref*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<CAnimation />*/}
      {/*<CForm />*/}
      <UseState/>
    </div>
  );
}

export default App;
