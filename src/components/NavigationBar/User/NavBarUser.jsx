import { useState, useEffect } from "react";
import logo from "/logo.svg";
import { useNavigate } from "react-router-dom";
import { fontType } from "../../Text/text";
import NavigationLinkUser from "./NavigationLinkUser";
import fotoProfile from "../../../assets/Account/NavProfile.svg"
import logout from "../../../assets/icons/logout.svg"
import AccountLogout from "../../../container/Navbar/AccountLogout";
const NavBarUser = () => {
    const navigate = useNavigate();
    const [width, setWidth] = useState(window.innerWidth);
    const [isShowMenu, setIsShowMenu] = useState(false)
    const [showAccount, setShowAccount] = useState(false)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className="flex items-center justify-between h-[13vh] sticky top-0 bg-[#F5F5F5] z-10">
            <img src={logo} alt="CareerFund" className="ml-10" onClick={() => navigate("/home")} />
            {width <= 900 ?
                <>
                    <nav className="p-3 border-gray-200 rounded  dark:bg-gray-800 dark:border-gray-700">
                        <div className="container flex flex-wrap items-center justify-between mx-auto">
                            <button
                                type="button"
                                className="inline-flex fixed right-13 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                onClick={() => {
                                    setIsShowMenu(!isShowMenu)
                                }}>
                                <svg className="w-10 h-10 right-10 fixed"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd">
                                    </path>
                                </svg>
                            </button>
                            {isShowMenu &&
                                <div className="fixed top-24 right-5 bg-white border-primary50 border-2 w-[20rem] h-[25vh] rounded-xl" >
                                    <div className="h-full flex flex-col items-center justify-evenly">
                                        <NavigationLinkUser flexCol={true} />
                                        <div className="flex gap-3 order-1" onClick={() => {
                                            setShowAccount(!showAccount)
                                        }}>
                                            <img src={fotoProfile} />
                                            <div>
                                                <p className={`${fontType["h3"]}`}>Rina Doe</p>
                                                <p className={`${fontType["p1"]} text-neutral30`}>Malang, Indonesia</p>
                                            </div>
                                            <img src={logout} />
                                        </div>
                                        {showAccount &&
                                            <AccountLogout navigate={"/account"} lite={true} />
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </nav>
                </>
                :
                <>
                    <nav className="flex gap-4">
                        <NavigationLinkUser />
                    </nav>
                    <div className="flex gap-3 px-8 mr-10" onClick={() => {
                        setShowAccount(!showAccount)
                    }} >
                        <img src={fotoProfile} />
                        <div>
                            <p className={`${fontType["h4"]}`}>Rina Doe</p>
                            <p className={`${fontType["p3"]} text-neutral30`}>Malang, Indonesia</p>
                        </div>
                        <img src={logout} />
                    </div>
                    {showAccount &&
                        <AccountLogout navigate={"/account"} lite={false} />
                    }
                </>
            }
        </div>
    )
}

export default NavBarUser