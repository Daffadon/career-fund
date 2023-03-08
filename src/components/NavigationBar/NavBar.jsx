import { Link, useNavigate } from "react-router-dom";
import { fontType } from "../Text/text";
import logo from "/logo.svg";

const NavBar = () => {
        const navigate = useNavigate();
        const goToBottom = () => {
                window.scrollTo({
                        top: document.documentElement.scrollHeight,
                        behavior: "smooth",
                });
        };
        const beranda = () => {
                if (window.location.pathname == "/") {
                        window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                        });
                }
        };

        return (
                <div className="flex items-center justify-between h-[13vh] sticky top-0 bg-[#F5F5F5] z-10">
                        <img src={logo} alt="CareerFund" className="ml-10" />
                        <nav className="flex gap-4">
                                <Link
                                        className={`${fontType["link"]}`}
                                        onClick={beranda}
                                        to="/"
                                >
                                        Beranda
                                </Link>
                                <Link
                                        className={`${fontType["link"]}`}
                                        onClick={goToBottom}
                                >
                                        Tentang Kami
                                </Link>
                                <Link
                                        className={`${fontType["link"]}`}
                                        to="/program"
                                >
                                        Program
                                </Link>
                                <Link
                                        className={`${fontType["link"]}`}
                                        to="/help"
                                >
                                        Bantuan
                                </Link>
                        </nav>
                        <Link
                                className={`${fontType["button"]} bg-secondary50 mr-10 py-2 px-8 rounded-full`}
                                to="/login"
                        >
                                Masuk / Daftar
                        </Link>
                </div>
        );
};

export default NavBar;
