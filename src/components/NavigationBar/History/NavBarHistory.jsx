
import { NavLink } from "react-router-dom"
import { fontType } from "../../Text/text"

const NavBarHistory = () => (
    <>
        <div>
            <NavLink
                className={`${fontType["p2"]} sm:text-sm md:text-base lg:text-xl xl:text-2xl md:font-bold text-neutral50 flex-1`}
                to="/history/register"
                style={({ isActive }) =>
                    isActive ? {
                        color: "black",
                        borderBottomColor: "#2753BD",
                        borderBottom: "solid",
                        borderColor: "#2753BD"
                    } : {}
                }>
                Riwayat Daftar
            </NavLink>
        </div>
        <div>
            <NavLink
                className={`${fontType["p2"]} sm:text-sm md:text-base lg:text-xl xl:text-2xl md:font-bold text-neutral50 flex-1`}
                to="/history/selection"
                style={({ isActive }) =>
                    isActive ? {
                        color: "black",
                        borderBottomColor: "#2753BD",
                        borderBottom: "solid",
                        borderColor: "#2753BD"
                    } : {}
                }>
                Riwayat Seleksi
            </NavLink>
        </div>
        <div>
            <NavLink
                className={`${fontType["p2"]} sm:text-sm md:text-base lg:text-xl xl:text-2xl md:font-bold text-neutral50 flex-1`}
                to="/history/accepted" style={({ isActive }) =>
                    isActive ? {
                        color: "black",
                        borderBottomColor: "#2753BD",
                        borderBottom: "solid",
                        borderColor: "#2753BD"
                    } : {}
                }>
                Riwayat Diterima
            </NavLink>
        </div>
        <div>
            <NavLink
                className={`${fontType["p2"]} sm:text-sm md:text-base lg:text-xl xl:text-2xl md:font-bold text-neutral50 flex-1`}
                to="/history/rejected"
                style={({ isActive }) =>
                    isActive ? {
                        color: "black",
                        borderBottomColor: "#2753BD",
                        borderBottom: "solid",
                        borderColor: "#2753BD"
                    } : {}
                }>
                Riwayat Ditolak
            </NavLink>
        </div>
        <div>
            <NavLink
                className={`${fontType["p2"]} sm:text-sm md:text-base lg:text-xl xl:text-2xl md:font-bold text-neutral50 flex-1`}
                to="/history/followed" style={({ isActive }) =>
                    isActive ? {
                        color: "black",
                        borderBottomColor: "#2753BD",
                        borderBottom: "solid",
                        borderColor: "#2753BD"
                    } : {}
                }>
                Riwayat Mengikuti
            </NavLink>
        </div>
    </>
)

export default NavBarHistory