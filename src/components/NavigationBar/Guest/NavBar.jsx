import { Link, useNavigate } from "react-router-dom";
import { fontType } from "../../Text/text";
import logo from "/logo.svg";
import { useState, useEffect, useContext } from "react";
import NavigationLinkGuest from "./NavigationLinkGuest";
import { userContext } from "../../../context/AuthContext";
import logout from "../../../assets/icons/logout.svg"
import AccountLogout from "../../../container/Navbar/AccountLogout";
import { getUser } from "../../../api/api";
const NavBar = () => {
	const navigate = useNavigate()
	// const { user, setUser } = useContext(userContext);
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
	const setToken = () => {
		localStorage.setItem('token', '123')
		setTimeout(() => {
			location.reload()
		}, 500);
	}
	const unsetToken = () => {
		localStorage.removeItem('token')
		setTimeout(() => {
			location.reload()
		}, 500);
	}
	// useEffect(() => {
	// 	const getProfileContent = async () => {
	// 		try {
	// 			const response = await getUser()
	// 			setUser(response)
	// 		} catch (error) { }
	// 	}
	// 	getProfileContent()
	// }, [])
	return (

		<div className="flex items-center justify-between h-[13vh] sticky top-0 bg-[#F5F5F5] z-10">
			<img src={logo} alt="CareerFund" className="ml-10 cursor-pointer" onClick={() => navigate(user ? '/home' : '/')} />
			{width <= 870 ?
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
							<div className="fixed top-24 right-5 bg-white border-none border-2 w-[16rem] h-[20vh] rounded-xl" >
								<div className="h-full flex flex-col items-center justify-evenly">
									<NavigationLinkGuest />
									{localStorage.getItem('token') ?
										<>
											<div className="flex gap-3 order-1 items-center" onClick={() => {
												setShowAccount(!showAccount)
											}}>
												{user.data.user.url_icon ?
													<img src={user.data.user.url_icon} className="w-1/12 rounded-full" />
													:
													<div className="w-4 h-4 rounded-full bg-neutral50"></div>
												}
												<div>
													<p className={`${fontType["h3"]}`}>{user.data.user.name.split(" ").length >= 3 ? `${user.data.user.name.split(" ")[0]} ${user.data.user.name.split(" ")[1]}` : user.data.user.name}</p>
													<p className={`${fontType["p1"]} text-neutral30`}>{user.data.user.city && user.data.user.region ? `${user.data.user.city}, ${user.data.user.region}` : "-"}</p>
												</div>
												<img src={logout} />
											</div>
											{showAccount &&
												<AccountLogout navigate={"/account"} lite={true} />
											}
										</>
										:
										<>
											<button>Set Token to view auth mode</button>
											<Link className={`${fontType["button"]} bg-secondary50 py-2 px-8 rounded-full hover:scale-150`} to="/login">
												Masuk / Daftar</Link>
										</>
									}
								</div>
							</div>
						}
					</div>
				</nav>
				:
				<>
					<nav className="flex gap-4">
						<NavigationLinkGuest />
					</nav>
					{localStorage.getItem('token') ?
						<>
							<div className="flex gap-3 px-8 mr-10 cursor-pointer justify-center items-center" onClick={() => {
								setShowAccount(!showAccount)
							}} >
								{/* {user.data.user.url_icon ?
									<img src={user.data.user.url_icon} className=" w-12 rounded-full" />
									: */}
								<div className="w-8 h-8 rounded-full bg-neutral50"></div>
								{/* } */}
								<div>
									{/* <p className={`${fontType["h4"]}`}>{user.data.user.name.split(" ").length >= 3 ? `${user.data.user.name.split(" ")[0]} ${user.data.user.name.split(" ")[1]}` : user.data.user.name}</p> */}
									<p className={`${fontType["h4"]}`}>Rina Doe</p>
									<p className={`${fontType["p3"]} text-neutral30`}>Jakarta, Indonesia</p>
								</div>
								<img src={logout} />
							</div>
							{showAccount &&
								<AccountLogout navigate={"/account"} lite={false} />
							}
						</>
						:
						<div className="flex justify-center items-center">
							{localStorage.getItem('token') ?
								<button onClick={unsetToken} className="mr-5 bg-blue-500 px-5 py-2 rounded-xl text-white">Unset Token</button>
								:
								<button onClick={setToken} className="mr-5 bg-blue-500 px-5 py-2 rounded-xl text-white">Set Token</button>
							}
							<Link className={`${fontType["button"]} cursor-pointer bg-secondary50 mr-10 py-2 px-8 rounded-full`}
								to="/login"
							>Masuk / Daftar</Link>
						</div>
					}
				</>
			}
		</div>
	);
};

export default NavBar;
