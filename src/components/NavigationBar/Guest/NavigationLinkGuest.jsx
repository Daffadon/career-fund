import { NavLink } from "react-router-dom"
import { fontType } from "../../Text/text"
const NavigationLinkGuest = () => {
    return (
        <>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/"
            >
                Beranda
            </NavLink>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/about"
            >
                Tentang Kami
            </NavLink>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/program"
            >
                Program
            </NavLink>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/help"
            >
                Bantuan
            </NavLink>
        </>
    )
}

export default NavigationLinkGuest