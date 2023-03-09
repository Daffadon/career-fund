import { Link, NavLink} from "react-router-dom";
import { fontType } from "../Text/text";
import logo from "/logo.svg";

const NavBar = () => {
	return (
		<div className="flex items-center justify-between h-[13vh] sticky top-0 bg-[#F5F5F5] z-10">
			<img src={logo} alt="CareerFund" className="ml-10" />
			<nav className="flex gap-4">
				<NavLink
					className={`${fontType["link"]} text-neutral50`}
					style={({ isActive }) =>
						isActive ? { color: '#2753BD' } : {}
					}
					to="/"
				>Beranda</NavLink>
				<NavLink
					className={`${fontType["link"]} text-neutral50`}
					style={({ isActive }) =>
						isActive
							? { color: '#2753BD' } : {}
					}
					to="/about"
				>Tentang Kami</NavLink>
				<NavLink
					className={`${fontType["link"]} text-neutral50`}
					style={({ isActive }) =>
						isActive
							? { color: '#2753BD' } : {}
					}
					to="/program"
				>Program</NavLink>
				<NavLink
					className={`${fontType["link"]} text-neutral50`}
					style={({ isActive }) =>
						isActive
							? { color: '#2753BD' } : {}
					}
					to="/help"
				>Bantuan</NavLink>
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
