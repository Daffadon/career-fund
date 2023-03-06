import { Route, Routes } from "react-router-dom"
import ForgotPassword from "../page/ForgotPassword"
import Home from "../page/Home"
import LandingPage from "../page/LandingPage"
import Login from "../page/Login"
import SignUp from "../page/SignUp"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import Program from "../page/Program"
import Account from "../page/Account"
import Help from "../page/Help"
import History from "../page/History"

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="signup/forgot-password" element={<ForgotPassword />} />
                <Route path="/help" element={<Help />} />
            </Route>
            <Route element={<PrivateRoutes />}>
                <Route path="/program" element={<Program />} />
                <Route path='/history' element={<History />} />
                <Route path='/account' element={<Account />} />
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes