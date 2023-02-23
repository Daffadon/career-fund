import { useContext, useEffect, useState } from "react"
import { login } from "../authentication/AuthService";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";
import userContext from "../context/UserProvider";

const Login = () => {
    const [, setToken] = useContext(userContext);
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    let emailErr = true
    let passwdErr = true

    useEffect(() => {
        if (!email.match(EMAIL_REGEX)) {
            emailErr = true
        } else {
            emailErr = false
        }
    }, [email])

    useEffect(() => {
        if (!passwd.match(PASSWORD_REGEX)) {
            passwdErr = true
        } else {
            passwdErr = false
        }
    }, [passwd])

    const submitHandler = (e) => {
        e.preventDefault()
        if(passwdErr&&emailErr){
            return "password atau email salah"
        }
        setLoading(true)
        const response = login({ email, passwd })
        if (response.status === 200) {
            setToken(response.token)
        }
        setLoading(false)
        setMessage(response.massage)
    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }} />
            <label htmlFor="passwd">Password</label>
            <input
                type="password"
                name="passwd"
                value={passwd}
                onChange={(e) => {
                    setPasswd(e.target.value);
                }} />
            <button type="submit">LOGIN</button>
        </form>
    )
}

export default Login