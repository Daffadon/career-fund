import LoginForm from "../components/Form/LoginForm";

const Login = () => {

    return (
        <div className="flex h-[100vh] items-center">
            <div className="w-6/12 h-full bg-slate-400"></div>
            <div className="w-6/12 flex justify-center">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login