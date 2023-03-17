import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { userContext } from "../../../context/AuthContext"
import { fontType } from "../../Text/text"
const NavigationLinkGuest = () => {
    const { user } = useContext(userContext);
    return (
        <>
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to={`${user ? '/home' : '/'}`}
            >
                Beranda
            </NavLink>
            {!user &&
                <NavLink
                    className={`${fontType["h4"]} text-neutral50`}
                    style={({ isActive }) =>
                        isActive ? { color: "#2753BD" } : {}
                    }
                    to="/about"
                >
                    Tentang Kami
                </NavLink>
            }
            <NavLink
                className={`${fontType["h4"]} text-neutral50`}
                style={({ isActive }) =>
                    isActive ? { color: "#2753BD" } : {}
                }
                to="/program"
            >
                Program
            </NavLink>
            {user &&
                <NavLink
                    className={`${fontType["h4"]} text-neutral50`}
                    style={({ isActive }) =>
                        isActive ? { color: "#2753BD" } : {}
                    }
                    to="/history"
                >
                    Riwayat
                </NavLink>
            }
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