import { Navigate } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated,role,children}) => {
     if (!isAuthenticated && role!==localStorage.getItem("hasRole")) {
    return <Navigate to="/"/>;
  }
  return children;
}

export default ProtectedRoute