import { Navigate } from "@tanstack/react-router";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { admin, isLoading } = useAuth();

  if (isLoading) {
    return <p>Checking credentials…</p>;
  }

  if (!admin) {
    return <Navigate to="/login" />;
  }

  return children;
}
