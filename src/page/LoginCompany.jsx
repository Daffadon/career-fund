import picture from "../assets/SignUp-Login/signUpPic.svg";
import LoginFormCompany from "../components/Form/LoginFormCompany";
const LoginCompany = () => {
      return (
            <div className="flex h-[100vh] items-center">
                  <div className="w-6/12 h-full flex justify-end">
                        <img src={picture} alt="" className="w-7/12" />
                  </div>
                  <div className="w-6/12 flex justify-center">
                        <LoginFormCompany/>
                  </div>
            </div>
      );
};

export default LoginCompany;
