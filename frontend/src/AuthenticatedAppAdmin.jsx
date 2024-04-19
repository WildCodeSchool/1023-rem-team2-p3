import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export default function AuthenticatedAppAdmin() {
  const { user, isAuthenticated } = useContext(UserContext);
  console.info("user from AuthenticatedAppAdmin", user);

  // Renvoie une route protégée ou redirige vers la page de connexion
  return isAuthenticated && user.data.is_admin === "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/acces-refusee" replace />
  );
}
