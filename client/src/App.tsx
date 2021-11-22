import React, { useEffect, useRef } from "react";
import "./App.css";
import useClick from "./hooks/useClick";
import useTabs from "./hooks/useTabs";

function App() {
  let asd = 9;
  const say = () => asd + 10;
  const title = useClick(say);
  return (
    <div className="App">
      <div ref={title}>{asd}</div>
    </div>
  );
}

export default App;
