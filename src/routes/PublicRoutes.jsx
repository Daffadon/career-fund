import { isAuthenticated } from "../authentication/AuthService"
import { Navigate, Outlet } from "react-router-dom"
import { useState } from "react"
const PublicRoutes = () => {
    const [isLogin, setIsLogin] = useState(isAuthenticated);

    return (
        <>
            {isLogin ? <Navigate to="/home" /> : <Outlet />}
        </>
    )
}

export default PublicRoutes