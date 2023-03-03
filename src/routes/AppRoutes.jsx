import { Route, Routes } from "react-router-dom"
import ForgotPassword from "../page/ForgotPassword"
import Home from "../page/Home"
import Job from "../page/Job"
import LandingPage from "../page/LandingPage/LandingPage"
import Login from "../page/Login"
import Profile from "../page/Profile"
import SignUp from "../page/SignUp"
import Test from "../page/Test"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path="signup/forgot-password" element={<ForgotPassword />} />
                <Route path='/job' element={<Job />} />
                <Route path="/test" element={<Test />} />
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes