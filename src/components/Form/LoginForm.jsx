import { useCallback, useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { login } from "../../authentication/AuthService";
import { fontType } from "../Text/text";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";
import openEye from "../../assets/icons/openeye.svg";
import closeEye from "../../assets/SignUp-Login/closeEye.svg";
import ForgetPassword from "../PopUp/ForgetPassword";
import AlertCustom from "../Alerts/AlertCustom";
import OtpForgetPassword from "../PopUp/OtpForgetPassword";
import { userContext } from "../../context/AuthContext";
import { getUser } from "../../api/api";
import Loading from "../Loading/Loading";

const LoginForm = () => {
	const { setUser } = useContext(userContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false)
	const [msg, setMsg] = useState("")
	const [isOpen, setIsOpen] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const [isSentRec, setIsSentRec] = useState(false);
	const loginHandler = async (e) => {
		e.preventDefault();
		// if (!password.match(PASSWORD_REGEX) || !email.match(EMAIL_REGEX)) {
		// 	setMsg("Pastikan email dan password benar")
		// 	return setError(true)
		// }
		try {
			setLoading(true);
			await login(email, password);
			const response = await getUser()
			setUser(response)
			location.reload()
		} catch (error) {
			setMsg(error.message)
			setError(true)
		}
		setLoading(false);
	};
	const showModalHandler = useCallback(
		(value) => {
			setIsShow(value);
		},
		[setIsShow]
	);

	return (
		<>
			<form onSubmit={loginHandler} className="flex flex-col w-full md:w-[20rem]">
				<div>
					<p className={`${fontType["h1"]} mb-7 text-center md:text-left`}>Masuk</p>
				</div>
				<div className="flex flex-col mb-4 ">
					<label
						htmlFor="email"
						className={`${fontType["h4"]} mb-5`}
					>
						Email
					</label>
					<input
						className="rounded-full px-3 py-2 border-none bg-[#F9F9F9]"
						type="email"
						placeholder="Email"
						name="email"
						value={email}
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						required
					/>
				</div>
				<div className="flex flex-col mb-4">
					<label htmlFor="password" className={`${fontType["h4"]} mb-5`}>
						Password
					</label>
					<div className="relative">
						<input
							className="rounded-full px-3 py-2 w-11/12 border-none bg-[#F9F9F9]"
							placeholder="Password"
							type={isOpen ? "text" : "password"}
							name="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
							required
						/>
						{isOpen ? (
							<img src={openEye} className="absolute -right-3 sm:-right-1 top-3 cursor-pointer"
								onClick={() => setIsOpen(false)}
							/>)
							:
							(<img src={closeEye} className="absolute -right-3 sm:-right-1 top-3 cursor-pointer"
								onClick={() => setIsOpen(true)}
							/>
							)}
					</div>
					<div className="self-end">
						<p className={`${fontType["p2"]} text-primary50 cursor-pointer mt-3`}
							onClick={showModalHandler} >
							Lupa Kata Sandi?
						</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<button type="submit" className={`${fontType["button"]} w-10/12 bg-primary50 text-white py-2 px-4 rounded-full`}>
						Masuk
					</button>
					<p className={`${fontType["p3"]} mt-2 text-primary50`}>
						Tidak Punya Akun?
						<Link to="/signup" className="font-bold">
							{" "}
							Daftar
						</Link>
					</p>
					<Link className={`${fontType["h5"]} text-primary50 mt-2`} to="/companylogin">Masuk Untuk Perusahaan</Link>
				</div>
			</form>
			{loading && <Loading />}
			{isShow && <ForgetPassword setIsShow={setIsShow} setIsSentRec={setIsSentRec} email={email} setEmail={setEmail} />}
			{isSentRec && <OtpForgetPassword email={email} />}
			{error && <AlertCustom setError={setError} errorMessage={msg} />}
		</>
	);
};

export default LoginForm;
