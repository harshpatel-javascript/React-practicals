import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  const { authenticated } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    authenticated ? navigate("/home") : navigate("/signup");
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
