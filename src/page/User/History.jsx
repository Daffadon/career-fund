import LayoutUser from "../../components/Layout/LayoutUser"
import imgHeader from "../../assets/History/imgHeaderHistory.svg"
import NavBarHistory from "../../components/NavigationBar/History/NavBarHistory"
import { Outlet } from "react-router-dom"
const History = () => {
    return (
        <LayoutUser>
            <div className="flex justify-center items-center">
                <img src={imgHeader} className="max-w-full h-auto" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-around items-center bg-white w-11/12 h-[10vh] my-10 rounded-3xl">
                    <NavBarHistory />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex w-11/12 justify-around items-center">
                    <Outlet />
                </div>
            </div>
        </LayoutUser>
    )
}

export default History