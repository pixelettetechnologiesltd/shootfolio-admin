import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function ProtectedLoginRoute() {
  const isLoggedIn = localStorage.getItem("adminToken");
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

ProtectedLoginRoute.propTypes = {
  allowedRole: PropTypes.string,
};

export default ProtectedLoginRoute;
