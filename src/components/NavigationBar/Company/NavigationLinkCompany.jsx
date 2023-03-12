
import { NavLink } from "react-router-dom"
import { fontType } from "../../Text/text"
const NavigationLinkCompany = () => {
    return (
        <>
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
        </>
    )
}

export default NavigationLinkCompany