import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => (
  // const token = localStorage.getItem("@Token");

  <Outlet />
  // return !token ? <Outlet /> : <Navigate to="/shop" />;
);
