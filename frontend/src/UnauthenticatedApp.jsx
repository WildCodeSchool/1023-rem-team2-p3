import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export default function UnauthenticatedApp() {
  const { isAuthenticated } = useContext(UserContext);
  return !isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
