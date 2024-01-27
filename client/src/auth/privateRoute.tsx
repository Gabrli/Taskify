import { authToken } from "./token";

import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const localToken = localStorage.getItem("token")
  return authToken.token || localToken === "true" ? <Outlet />  : <Navigate to="/login" />;
}
