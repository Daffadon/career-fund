import SignUpForm from "../components/Form/SignUpForm";
import picture from "../assets/SignUp-Login/signUpPic.svg"
const SignUp = () => {

    return (
        <div className="flex h-[100vh] items-center">
            <div className="w-6/12 h-full flex justify-end">
                <img src={picture} alt="" className="w-9/12" />
            </div>
            <div className="w-6/12 flex justify-center">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp