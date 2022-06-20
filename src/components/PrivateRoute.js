import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { loginStatus } = useAuth();
  const { pathname } = useLocation();
  console.log({ pathname });

  return loginStatus ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: pathname }} replace />
  );
};

export default PrivateRoute;
