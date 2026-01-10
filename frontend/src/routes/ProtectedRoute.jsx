import React  from 'react'
import { Navigate} from "react-router-dom";

const ProtectedRoute = ({ children}) => {
  // return (localStorage.getItem("isAuthenticated") === "true"? children : <Navigate to="/" replace/>);
  
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute