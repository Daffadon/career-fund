
import SignUpForm from "../components/Form/SignUpForm";

const SignUp = () => {

    return (
        <div className="flex h-[100vh] items-center">
            <div className="w-6/12 h-full bg-slate-400"></div>
            <div className="w-6/12 flex justify-center">
                <SignUpForm />
            </div>
        </div>
    )
}

export default SignUp