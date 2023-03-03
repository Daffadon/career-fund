import { isAuthenticated } from "../authentication/AuthService"
import { Navigate, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
const PublicRoutes = () => {
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
            {isLogin ? <Navigate to="/home" /> : <Outlet />}
        </>
    )
}

export default PublicRoutes