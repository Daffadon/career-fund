import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../authentication/AuthService";
import { fontType } from "../Text/text";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants/regex";

const SignUpForm = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })
    const [loading, setLoading] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [passwdErr, setPasswdErr] = useState(false);
    const [repasswd, setRePasswd] = useState();

    useEffect(() => {
        if (!user.email.match(EMAIL_REGEX)) {
            setEmailErr(true)
        } else {
            setEmailErr(false)
        }
    }, [user.email])

    useEffect(() => {
        if (!user.password.match(PASSWORD_REGEX)) {
            setPasswdErr(true)
        } else {
            setPasswdErr(false)
        }
    }, [user.password])

    useEffect(() => {
        if (user.password === repasswd) {
            "password match"
        } else {
            "not match"
        }
    }, [repasswd])

    const signUpHandler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const response = await signUp(user)
        setLoading(false)
    }
    return (
        <form onSubmit={signUpHandler} className="flex flex-col w-6/12">
            <div>
                <p className={`${fontType["h1"]} mb-7`}>Daftar</p>
            </div>
            <div className="flex flex-col mb-2">
                <label htmlFor="name" className={`${fontType["h4"]} mb-5`}>Nama</label>
                <input
                    className=" rounded-full px-3 py-2"
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={user.name}
                    onChange={(e) => {
                        setUser({ ...user, name: e.target.value })
                    }} />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="phone" className={`${fontType["h4"]} mb-5`}>No. Telepon</label>
                <input
                    className=" rounded-full px-3 py-2"
                    type="text"
                    name="phone"
                    placeholder="No. Telepon"
                    value={user.phone}
                    onChange={(e) => {
                        setUser({ ...user, phone: e.target.value })
                    }} />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="email" className={`${fontType["h4"]} mb-5`}>Email</label>
                <input
                    className=" rounded-full px-3 py-2"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) => {
                        setUser({ ...user, email: e.target.value });
                    }} />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="password" className={`${fontType["h4"]} mb-5`}>Password</label>
                <input
                    className=" rounded-full px-3 py-2"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={user.password}
                    onChange={(e) => {
                        setUser({ ...user, password: e.target.value });
                    }} />
            </div>
            <div className="flex flex-col mb-4">
                <label htmlFor="repasswd" className={`${fontType["h4"]} mb-5`}>Ulangi Password</label>
                <input
                    className=" rounded-full px-3 py-2"
                    type="password"
                    placeholder="Ulangi Password"
                    name="repasswd"
                    value={repasswd}
                    onChange={(e) => {
                        setRePasswd(e.target.value);
                    }} />
            </div>
            <div className="flex flex-col items-center">
                <button type="submit" className="w-full bg-slate-500 text-white font-bold py-2 px-4 rounded-full">Daftar</button>
                <p className="mt-2">Sudah Punya Akun?
                    <Link to="/login" className="font-semibold"> Masuk</Link>
                </p>
            </div>
        </form>
    )
}

export default SignUpForm