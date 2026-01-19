import React  from 'react'
import { Navigate} from "react-router-dom";
import {useSelector} from "react-redux"
import Loader from '../components/Loader';

const ProtectedRoute = ({ children,allowedRoles}) => {
  // return (localStorage.getItem("isAuthenticated") === "true"? children : <Navigate to="/" replace/>);
  const {user,loading} = useSelector((state) => state.auth);
  const role=user?.role;
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  if (user && allowedRoles.length > 0 && !allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute