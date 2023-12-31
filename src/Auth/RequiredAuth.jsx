
import useAuth from "./hooks/useAuth";
import { IAuthData } from "./contex/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  return auth?.accessToken && (allowedRoles === "admin" && auth.isAdmin)  ? (
    <Outlet />
  ) : auth?.accessToken && !auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
