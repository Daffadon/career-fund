import imgHeader from "../../assets/History/imgHeaderHistory.svg"
import NavBarHistory from "../../components/NavigationBar/History/NavBarHistory"
import { Outlet } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
const History = () => {
    return (
        <Layout>
            <div className="flex justify-center items-center">
                <img src={imgHeader} className="max-w-full h-auto" />
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-around items-center bg-white w-11/12 h-[10vh] mt-8 mb-3 rounded-3xl">
                    <NavBarHistory />
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-wrap flex-col lg:flex-row w-full gap-8 justify-around  items-center lg:items-center my-10">
                    <Outlet />
                </div>
            </div>
        </Layout>
    )
}

export default History