import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuthenticated, component: Component }) {
  return isAuthenticated ? <Component /> : <Navigate to="/signup" />;
}

export default PrivateRoute;
