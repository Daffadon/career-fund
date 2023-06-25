import { Route, Routes } from "react-router-dom"
import ForgotPassword from "../page/Public/ForgotPassword"
import Home from "../page/User/Home"
import LandingPage from "../page/Public/LandingPage"
import Login from "../page/User/Login"
import SignUp from "../page/User/SignUp"
import PrivateRoutes from "./PrivateRoutes"
import PublicRoutes from "./PublicRoutes"
import Program from "../page/User/Program"
import Account from "../page/User/Account"
import History from "../page/User/History"
import NotFound from "../page//Public/NotFound"
import AboutUs from "../page/Public/AboutUs"
import Help from "../page/Public/Help"
import Fund from "../page/Perusahaan/Fund"
import SignUpCompany from "../page/Perusahaan/SignUpCompany"
import LoginCompany from "../page/Perusahaan/LoginCompany"
import Registrar from "../page/Perusahaan/Registrar"
import AccountCompany from "../page/Perusahaan/AccountCompany"
import ProgramCompany from "../page/Perusahaan/ProgramCompany"
import HomeCompany from "../page/Perusahaan/HomeCompany"
import DetailProgramCompany from "../page/Perusahaan/DetailProgramCompany"
import RegisterHistory from "../container/History/RegisterHistory"
import SelectionHistory from "../container/History/SelectionHistory"
import AcceptedHistory from "../container/History/AcceptedHistory"
import RejectedHistory from "../container/History/RejectedHistory"
import FollowedHistory from "../container/History/FollowedHistory"
import UserDetailProgram from "../page/User/UserDetailProgram"
import FundDetail from "../page/Perusahaan/FundDetail"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/help" element={<Help />} />
            <Route path="*" element={<NotFound />} />
            {/* <Route element={<PublicRoutes />}> */}
            {/* !!! DISABLED FOR DUMMY ONLY */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/companylogin" element={<LoginCompany />} />
            <Route path="/companysignup" element={<SignUpCompany />} />
            <Route path="/about" element={<AboutUs />} />
            {/* </Route> */}



            {/* <Route element={<PrivateRoutes />}> */}
            {/* !!! DISABLED FOR DUMMY ONLY */}
            <Route path="/program" element={<Program />} />
            <Route path="/program/:name" element={<UserDetailProgram />} />
            <Route path='/home' element={<Home />} />
            <Route path='/account' element={<Account />} />
            <Route path='/history' element={<History />}>
                <Route path="/history/register" element={<RegisterHistory />} />
                <Route path="/history/selection" element={<SelectionHistory />} />
                <Route path="/history/accepted" element={<AcceptedHistory />} />
                <Route path="/history/rejected" element={<RejectedHistory />} />
                <Route path="/history/followed" element={<FollowedHistory />} />
            </Route>
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/account-company" element={<AccountCompany />} />
            <Route path="/home-company" element={<HomeCompany />} />
            <Route path="/fund" element={< Fund />} />
            <Route path="/program-company" element={<ProgramCompany />} />
            <Route path="/detail-program-company" element={<DetailProgramCompany />} />
            <Route path="/detail-fund" element={<FundDetail />} />
            {/* </Route> */}
        </Routes>
    )
}

export default AppRoutes