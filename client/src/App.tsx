import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Animation from "./page/Animation/Animation";
import Register from "./page/register/Register";
import Pay from "./page/pay/Pay";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </>
  );
}

export default App;
