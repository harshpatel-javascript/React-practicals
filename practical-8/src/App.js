import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  const { isAuthenticated } = useSelector((state) => state);
  return (
    <div className="app">
      <Routes>
        <Route
          path="/signup"
          element={
            <PublicRoute isAuthenticated={isAuthenticated} component={SignUp} />
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated} component={Home} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
