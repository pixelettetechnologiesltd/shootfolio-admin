import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedRoute() {
  const isLoggedIn = localStorage.getItem("adminToken");
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}

ProtectedRoute.propTypes = {
  allowedRole: PropTypes.string,
};

export default ProtectedRoute;
