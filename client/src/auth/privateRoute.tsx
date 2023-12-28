import { authToken } from "./token";

import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  return authToken.token ? <Outlet /> : <Navigate to="/login" />;
}
