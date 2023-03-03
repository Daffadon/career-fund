import { Link } from "react-router-dom"
import { fontType } from "../Text/Text"
import { landingTitle } from "./NavigationTitle"
import logo from "/logo.svg"
const NavBar = () => {
    return (
        <div className="flex items-center justify-between h-[15vh]">
            <img src={logo} alt="CareerFund" className="ml-10" />
            <nav className="flex gap-4">
                {landingTitle.map(item => {
                    return (
                        <Link className={`${fontType["link"]}`} key={item.key} to={`${item.path}`}>{item.title}</Link>
                    )
                })}
            </nav>
            <div className="w-44 h-10 bg-[#b0fb49] rounded-full mr-10 py-2 px-8">
                Masuk / Daftar
            </div>
        </div>
    )
}

export default NavBar