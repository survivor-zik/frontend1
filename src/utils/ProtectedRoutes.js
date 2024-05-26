import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const access_token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    console.log("token", access_token);
    console.log("role", role);
    if (access_token && role === "Admin") {
      console.log("IF");
      setIsAdmin(true);
    } else {
      console.log("ELSE");
      setIsAdmin(false);
    }
    console.log(isAdmin);
  }, [isAdmin]);
  return <>{!isAdmin && <Outlet />}</>;
  // return <>{isAdmin ? <Outlet /> : <Navigate to="/signin" />}</>;
};

export default ProtectedRoutes;
