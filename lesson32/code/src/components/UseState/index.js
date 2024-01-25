import { useState } from "react";
import { Initial } from "./Initial";
import { StateBatching } from "./StateBatching";
import { StateForm } from "./StateForm";
import { StateReset } from "./StateReset";

export function UseState() {
  const [isOpoen, setIsOpen] = useState();
  return (
    <>
      <Initial />
      <StateBatching />
      <StateForm />
      <StateReset />
    </>
  );
}
