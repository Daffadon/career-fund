import { fontType } from "../../Text/text";
import logo from "/logo.svg";
import fotoProfile from "../../../assets/Account/fotoProfile.svg"
import { useState, useEffect, useContext } from "react";
import NavigationLinkCompany from "./NavigationLinkCompany";
import logout from "../../../assets/icons/logout.svg"
import AccountLogout from "../../../container/Navbar/AccountLogout";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../context/AuthContext";
import { getCompany } from "../../../api/api";
import LogOutCompany from "../../../container/Navbar/LogOutCompany";
const NavBarCompany = () => {
  const navigate = useNavigate()
  // const { user, setUser } = useContext(userContex)
  const [user, setUser] = useState({
    url_icon: null,
    name: "Daffa Putra",
    city: "Malang",
    region: "Indonesia"
  });
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
  // useEffect(() => {
  //     const getProfileContent = async () => {
  //         try {
  //             const response = await getCompany()
  //             setUser(response)
  //         } catch (error) { }
  //     }
  //     getProfileContent()
  // }, [])
  return (
    <div className="flex items-center justify-between h-[13vh] sticky top-0 bg-[#F5F5F5] z-10">
      <img src={logo} alt="CareerFund" className="ml-10" onClick={() => navigate("/home-company")} />
      {width < 940 ?
        <>
          <nav className="p-3 border-gray-200 rounded  dark:bg-gray-800 dark:border-gray-700">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
              <button
                type="button"
                className="inline-flex fixed right-13 items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={() => {
                  setIsShowMenu(!isShowMenu)
                }}>
                <svg className="w-10 h-10 right-10 fixed" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
              {isShowMenu &&
                <div className="fixed top-24 right-5 bg-white border-primary50 border-2 w-[20rem] h-[25vh] rounded-xl" >
                  <div className="h-full flex flex-col items-center justify-evenly">
                    <NavigationLinkCompany flexCol={true} />
                    {user &&
                      <>
                        <div className="flex gap-3 order-1 cursor-pointer" onClick={() => {
                          setShowAccount(!showAccount)
                        }}>
                          {user.url_icon ?
                            <img src={user.data.user.url_icon} className=" w-12 rounded-full" />
                            :
                            <div className="w-8 h-8 rounded-full bg-neutral50"></div>
                          }
                          <div>
                            <p className={`${fontType["h3"]}`}>{user.name.split(" ").length >= 3 ? `${user.name.split(" ")[0]} ${user.name.split(" ")[1]}` : user.name}</p>
                            <p className={`${fontType["p1"]} text-neutral30`}>{user.city && user.region ? `${user.city}, ${user.region}` : "-"}</p>
                          </div>
                          <img src={logout} />
                        </div>
                        {showAccount &&
                          <LogOutCompany navigate={"/account-company"} lite={true} />
                        }
                      </>
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
            <NavigationLinkCompany />
          </nav>
          {user &&
            <>
              <div className="flex gap-3 px-8 mr-10 cursor-pointer" onClick={() => {
                setShowAccount(!showAccount)
              }}>
                {user.url_icon ?
                  <img src={user.url_icon} className=" w-12 rounded-full" />
                  :
                  <div className="w-8 h-8 rounded-full bg-neutral50"></div>
                }
                <div>
                  <p className={`${fontType["h3"]}`}>{user.name.split(" ").length >= 3 ? `${user.name.split(" ")[0]} ${user.name.split(" ")[1]}` : user.name}</p>
                  <p className={`${fontType["p1"]} text-neutral30`}>{user?.city && user?.region ? `${user?.city}, ${user.region}` : "-"}</p>
                </div>
                <img src={logout} />
              </div>
              {showAccount &&
                <LogOutCompany navigate={"/account-company"} lite={false} />
              }
            </>
          }

        </>
      }
    </div>
  );
};

export default NavBarCompany;
