import LoginForm from "../components/Form/LoginForm";
import picture from "../assets/SignUp-Login/signUpPic.svg"
const Login = () => {

    return (
        <div className="flex h-[100vh] items-center">
            <div className="w-6/12 h-full flex justify-end">
                <img src={picture} alt="" className="w-7/12" />
            </div>
            <div className="w-6/12 flex justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login