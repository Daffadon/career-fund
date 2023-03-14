
import { useNavigate } from "react-router-dom"
import toAkun from "../../assets/Account/toAkun.svg"
import toLogout from "../../assets/Account/toLogout.svg"
const AccountLogout = ({ navigate, lite }) => {
    const navigation = useNavigate()
    return (
        <div className={lite ? "fixed top-50 right-9 bg-white border-2 w-[18rem] h-[12vh] rounded-2xl z-50" : "fixed top-24 right-5 bg-white border-primary50 border-2 w-[20rem] h-[13vh] rounded-xl"} >
            <div className="h-full flex flex-col items-center justify-evenly">
                <img src={toAkun} className="cursor-pointer" onClick={() => {
                    navigation(navigate)
                }} />
                <img src={toLogout} className="cursor-pointer" />
            </div>
        </div>
    )
}

export default AccountLogout