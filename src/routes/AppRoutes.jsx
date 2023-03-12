import { Route, Routes } from "react-router-dom"
import ForgotPassword from "../page/ForgotPassword"
import Home from "../page/User/Home"
import LandingPage from "../page/LandingPage"
import Login from "../page/User/Login"
import SignUp from "../page/User/SignUp"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import Program from "../page/User/Program"
import Account from "../page/User/Account"
import Help from "../page/Help"
import History from "../page/User/History"
import SignUpCompany from "../page/Perusahaan/SignUpCompany"
import LoginCompany from "../page/Perusahaan/LoginCompany"
import NotFound from "../page/NotFound"
import AboutUs from "../page/AboutUs"
import Registrar from "../page/Perusahaan/Registrar"
import AccountCompany from "../page/Perusahaan/AccountCompany"
import Fund from "../page/Perusahaan/Fund"
import ProgramCompany from "../page/Perusahaan/ProgramCompany"
import HomeCompany from "../page/Perusahaan/HomeCompany"
import DetailProgramCompany from "../page/Perusahaan/DetailProgramCompany"
import HelpUser from "../page/User/HelpUser"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route element={<PublicRoutes />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/help" element={<Help />} />
                <Route path="/companylogin" element={<LoginCompany />} />
                <Route path="/companysignup" element={<SignUpCompany />} />
                <Route path="/about" element={<AboutUs />} />
            </Route>
            <Route element={<PrivateRoutes />}>
            </Route>
                <Route path="/help-user" element={<HelpUser/>}/>
            <Route path='/history' element={<History />} />
            <Route path='/home' element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/home-company" element={<HomeCompany />} />
            <Route path="/program-company" element={<ProgramCompany />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/fund" element={< Fund />} />
            <Route path="/account-company" element={<AccountCompany />} />
            <Route path='/account' element={<Account />} />
            <Route path="/detail-program-company" element={<DetailProgramCompany />} />
        </Routes>
    )
}

export default AppRoutes