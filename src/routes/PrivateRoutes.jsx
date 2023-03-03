import {useState, useEffect } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../authentication/AuthService"
const PrivateRoutes = () => {
    const [isLogin, setIsLogin] = useState();

    useEffect(()=>{
        const isLoggedIn = async () => {
            const resp = await isAuthenticated();
            setIsLogin(resp)
        }
        isLoggedIn()
    },[])
    
    return (
        <>
            {isLogin ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default PrivateRoutes