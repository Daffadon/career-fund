
import { NavLink } from "react-router-dom"
import { fontType } from "../../Text/text"
const NavigationLinkCompany = ({ flexCol }) => {
    return (
        <div className={flexCol ? "flex flex-col order-2 justify-center items-center gap-2" : " flex gap-3"}>
            <NavLink
                className={`${fontType["link"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: '#2753BD' } : {}
                }
                to="/home-company"
            >Beranda</NavLink>
            <NavLink
                className={`${fontType["link"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive
                        ? { color: '#2753BD' } : {}
                }
                to="/program-company"
            >Program</NavLink>
            <NavLink
                className={`${fontType["link"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive
                        ? { color: '#2753BD' } : {}
                }
                to="/registrar"
            >Pendaftar</NavLink>
            <NavLink
                className={`${fontType["link"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive
                        ? { color: '#2753BD' } : {}
                }
                to="/fund"
            >Pendanaan</NavLink>
            <NavLink
                className={`${fontType["link"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive
                        ? { color: '#2753BD' } : {}
                }
                to="/account-company"
            >Akun</NavLink>
        </div>
    )
}

export default NavigationLinkCompany