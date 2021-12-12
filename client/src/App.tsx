import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Asd from "./page/register/Asd";

import Register from "./page/register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register2" element={<Asd />} />
      </Routes>
    </>
  );
}

export default App;
