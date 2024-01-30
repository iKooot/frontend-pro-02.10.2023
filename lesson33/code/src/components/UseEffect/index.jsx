import React, { useState } from "react";
import { RenderCounter } from "./RenderCounter";
import { Timer } from "./Timer";
import { CallMyName } from "./CallMyName";
import { WindowResize } from "./WindowResize";
import { Animation } from "./Animation";
import { EffectForm } from "./EffectForm";
import { FetchUsers } from "./FetchUsers";

export function UseEffect() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/*<RenderCounter/>*/}
      {/*<Timer/>*/}
      {/*<CallMyName/>*/}
      {/*<div>*/}
      {/*  {show && <WindowResize />}*/}
      {/*  <button onClick={() => setShow((prevState) => !prevState)}>*/}
      {/*    show resize*/}
      {/*  </button>*/}
      {/*</div>*/}
      {/*<Animation />*/}
      {/*<EffectForm />*/}
      {/*<FetchUsers />*/}
    </div>
  );
}
