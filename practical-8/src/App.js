import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import Signup from "./components/Signup";
import "./App.css";

function App() {
  const { isAuthenticated } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("header");
    isAuthenticated ? navigate("/home") : navigate("/signup");
  }, [isAuthenticated, navigate]);
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
