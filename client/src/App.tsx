import "./App.css";

import useFullScreen from "./hooks/useFullScreen";
import useNotification from "./hooks/useNotification";

function App() {
  const asd = useNotification("안녕?", { body: "반가워" });
  return (
    <div className="App">
      <button onClick={asd}>풀버전</button>
    </div>
  );
}

export default App;
