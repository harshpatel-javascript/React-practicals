import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Home from "./components/Home";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { authenticated } = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    authenticated ? navigate("/home") : navigate("/");
  }, []);
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
