import React from "react";
import { Navigate } from "react-router-dom";

function PublicRoute({ isAuthenticated, component: Component }) {
  return !isAuthenticated ? <Component /> : <Navigate to="/home" />;
}

export default PublicRoute;
