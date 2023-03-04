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
        <form onSubmit={loginHandler} className="flex flex-col w-6/12">
            <div>
                <p className={`${fontType["h1"]} mb-7`}>Masuk</p>
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className={`${fontType["h4"]} mb-5`}>Email</label>
                <input
                    className="rounded-full px-3 py-2"
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
                <label htmlFor="passwd" className={`${fontType["h4"]} mb-5`}>Password</label>
                <input
                    className="rounded-full px-3 py-2"
                    placeholder="Password"
                    type="password"
                    name="passwd"
                    value={passwd}
                    onChange={(e) => {
                        setPasswd(e.target.value);
                    }}
                    required
                />
                <div className="self-end">
                    <Link to="/forgot-password" className={`${fontType["p1"]} text-[#2753BD]`}>Lupa Kata Sandi?</Link>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <button type="submit" className="w-full bg-[#2753BD] text-white py-2 px-4 rounded-full">Masuk</button>
                <p className="mt-2 text-[#2753BD]">Tidak Punya Akun?
                    <Link to="/signup" className="font-bold"> Daftar</Link>
                </p>
            </div>
        </form>
    )
}

export default LoginForm