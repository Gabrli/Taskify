import { isAuth } from "./token"

import { Outlet, Navigate } from "react-router-dom"

export default function PrivateRoute(){
    return (
       isAuth ? <Outlet/> : <Navigate to="/login"/>
    )
}