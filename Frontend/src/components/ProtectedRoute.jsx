import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // If user is logged in, allow access; otherwise, redirect to login page
  return currentUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
