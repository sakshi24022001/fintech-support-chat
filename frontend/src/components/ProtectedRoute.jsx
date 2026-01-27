import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { state } = useAuth();

  if (!state.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
