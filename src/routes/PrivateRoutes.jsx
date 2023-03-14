import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../authentication/AuthService"
const PrivateRoutes = () => {
    const [isLogin, setIsLogin] = useState(isAuthenticated);

    return (
        <>
            {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoutes