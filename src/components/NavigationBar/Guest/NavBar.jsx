import { Link, useNavigate } from "react-router-dom";
import { fontType } from "../../Text/text";
import logo from "/logo.svg";
import { useState, useEffect } from "react";
import NavigationLinkGuest from "./NavigationLinkGuest";
const NavBar = () => {
	const navigate = useNavigate()
	const [width, setWidth] = useState(window.innerWidth);
	const [isShowMenu, setIsShowMenu] = useState(false)
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
			<img src={logo} alt="CareerFund" className="ml-10" onClick={() => navigate("/")} />
			{width <= 870 ?
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
								<div className="fixed top-24 right-5 bg-white border-primary50 border-2 w-[16rem] h-[20vh] rounded-xl" >
									<div className="h-full flex flex-col items-center justify-evenly">
										<NavigationLinkGuest />
										<Link className={`${fontType["button"]} bg-secondary50 py-2 px-8 rounded-full`}
											to="/login"
										>Masuk / Daftar</Link>
									</div>
								</div>
							}
						</div>
					</nav>
				</>
				:
				<>
					<nav className="flex gap-4">
						<NavigationLinkGuest />
					</nav>
					<Link
						className={`${fontType["button"]} bg-secondary50 mr-10 py-2 px-8 rounded-full`}
						to="/login"
					>
						Masuk / Daftar
					</Link>
				</>
			}
		</div>
	);
};

export default NavBar;
