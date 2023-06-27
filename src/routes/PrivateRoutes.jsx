import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../authentication/AuthService"
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/AuthContext";
const PrivateRoutes = () => {
    // const [isLogin, setIsLogin] = useState(isAuthenticated());
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token'))
    // const { setUser } = useContext(userContext)
    // useEffect(() => {
    //     if (!isLogin) {
    //         setUser(null)
    //     }
    // })
    return (
        <>
            {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoutes