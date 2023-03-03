import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { login } from "../../authentication/AuthService";
import { fontType } from "../Text/text";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";


const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [emailErr, setEmailErr] = useState(false);
    const [passwdErr, setPasswdErr] = useState(false);

    useEffect(() => {
        if (!email.match(EMAIL_REGEX)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    }, [email])

    useEffect(() => {
        if (!passwd.match(PASSWORD_REGEX)) {
            setPasswdErr(true)
        } else {
            setPasswdErr(false)
        }
    }, [passwd])

    const loginHandler = async (e) => {
        e.preventDefault()
        if (passwdErr || emailErr) {
            return;
        }
        setLoading(true)
        const response = await login(email, passwd)

        setLoading(false)
        setMessage(response.massage)
    }

    return (
        <form onSubmit={loginHandler} className="flex flex-col w-7/12">
            <div>
                <p className={`${fontType["h1"]} mb-7`}>Login</p>
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-2 font-semibold">Email</label>
                <input
                    className="bg-slate-400 rounded-full px-3 py-2"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="passwd" className="mb-2 font-semibold">Password</label>
                <input
                    type="password"
                    name="passwd"
                    value={passwd}
                    onChange={(e) => {
                        setPasswd(e.target.value);
                    }}
                    className="bg-slate-400 rounded-full px-3 py-2"
                    required
                />
                <div className="self-end">
                    <Link to="/forgot-password" className="font-semibold ">Forgot Password</Link>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <button type="submit" className="w-full bg-slate-500 text-white font-bold py-2 px-4 rounded-full">LOGIN</button>
                <p className="mt-2">Don't have an account? <Link to="/signup" className="font-semibold">Sign Up</Link></p>
            </div>
        </form>
    )
}

export default LoginForm