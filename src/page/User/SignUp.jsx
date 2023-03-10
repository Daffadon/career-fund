import SignUpForm from "../../components/Form/SignUpForm";
import picture from "../../assets/SignUp-Login/signUpPic.svg";
import back from "../../assets/SignUp-Login/back.svg";
import { fontType } from "../../components/Text/text";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const SignUp = () => {
	const navigate = useNavigate();
	const toHome = () => {
		navigate("/");
	};

	const [width, setWidth] = useState(window.innerWidth);
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
		<>
			<div
				className="fixed left-28  top-16 w-full flex items-center cursor-pointer"
				onClick={toHome}>
				<img src={back} className="inline-block" />
				<p className={`${fontType["h4"]} ml-4 inline`}>
					Kembali
				</p>
			</div>
			<div className="flex flex-col justify-center md:flex-row h-screen items-center">
				{width <= 768 ? "" :
					<div className="w-6/12 h-full flex justify-center">
						<img src={picture} className="w-[20rem] lg:w-[28rem]" />
					</div>
				}
				<div className="w-8/12 md:w-6/12 flex justify-center">
					<SignUpForm/>
				</div>
			</div>
		</>
	);
};

export default SignUp;
