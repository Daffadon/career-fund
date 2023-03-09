import { Link, NavLink } from "react-router-dom";
import { fontType } from "../Text/text";
import logo from "/logo.svg";
import fotoProfile from "../../assets/Account/fotoProfile.svg"

const NavBarCompany = () => {
    return (
        <div className="flex items-center justify-between h-[13vh] sticky top-0 bg-[#F5F5F5] z-10">
            <img src={logo} alt="CareerFund" className="ml-10" />
            <nav className="flex gap-4">
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
            </nav>
            <div className="flex gap-3 px-8 mr-10" >
                <img src={fotoProfile} />
                <div>
                    <p className={`${fontType["h4"]}`}>Facebook</p>
                    <p className={`${fontType["p3"]} text-neutral30`}>Malang, Indonesia</p>
                </div>
            </div>
        </div>
    );
};

export default NavBarCompany;
