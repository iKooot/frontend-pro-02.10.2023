import {CustomHook, UseCallback, UseRef} from "./components";
import style from "./App.module.scss";
import "./index.css";
import { UseEffect, UseLayoutEffect, UseMemo } from "./components";
function App() {
  const { container } = style;
  return (
    <div className={container}>
      {/*<UseEffect />*/}
      {/*  <UseLayoutEffect/>*/}
      {/*  <UseRef/>*/}
      {/*<UseMemo />*/}
      {/*<UseCallback />*/}
        <CustomHook/>
    </div>
  );
}

export default App;
