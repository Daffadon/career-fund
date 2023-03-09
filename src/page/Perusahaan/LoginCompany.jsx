import picture from "../../assets/SignUp-Login/signUpPic.svg";
import LoginFormCompany from "../../components/Form/LoginFormCompany";
import back from "../../assets/SignUp-Login/back.svg";
import { fontType } from "../../components/Text/text";
import { useNavigate } from "react-router-dom";
const LoginCompany = () => {
	const navigate = useNavigate()
	const toHome = () => {
		navigate("/")
	}
	return (
		<>
			<div className="fixed left-28  top-16 w-full flex items-center cursor-pointer" onClick={toHome}>
				<img
					src={back}
					className="inline-block"
				/>
				<p className={`${fontType["h4"]} ml-4 inline`}>Kembali</p>
			</div>
			<div className="flex h-[100vh] items-center">
				<div className="w-6/12 h-full flex justify-center">
					<img src={picture} alt="" className="w-8/12" />
				</div>
				<div className="w-6/12 flex justify-center">
					<LoginFormCompany />
				</div>
			</div>
		</>
	);
};

export default LoginCompany;
