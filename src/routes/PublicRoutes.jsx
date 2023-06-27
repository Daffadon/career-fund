import { isAuthenticated } from "../authentication/AuthService"
import { Navigate, Outlet } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"

const PublicRoutes = () => {
    // const [isLogin, setIsLogin] = useState(isAuthenticated());
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))

    return (
        <>
            {isLogin ? <Navigate to="/home" /> : <Outlet />}
        </>
    )
}

export default PublicRoutes