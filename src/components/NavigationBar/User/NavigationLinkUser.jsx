import { fontType } from "../../Text/text"
import { NavLink } from "react-router-dom"
const NavigationLinkUser = ({ flexCol }) => {
    return (
        <div className={flexCol ? "flex flex-col order-2 justify-center items-center gap-2" : " flex gap-3"}>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/home"
            >
                Beranda
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
                to="/history"
            >
                Riwayat
            </NavLink>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/help-user"
            >
                Bantuan
            </NavLink>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/account"
            >
                Akun
            </NavLink>
        </div>
    )
}

export default NavigationLinkUser