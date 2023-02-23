import { useEffect, useState } from "react";
import { signUp } from "../authentication/AuthService";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../constants/regex";

const SignUp = () => {
    const [user, setUser] = useState({
        firstName, lastName, email, password, phone
    })
    const [repasswd, setRePasswd] = useState();
    let emailErr = true
    let passwdErr = true

    useEffect(() => {
        if (!user.email.match(EMAIL_REGEX)) {
            emailErr = true
        } else {
            emailErr = false
        }
    }, [user.email])

    useEffect(() => {
        if (!user.password.match(PASSWORD_REGEX)) {
            passwdErr = true
        } else {
            passwdErr = false
        }
    }, [user.password])

    useEffect(() => {
        if (user.password === repasswd) {
            return "password match"
        } else {
            return "not match"
        }
    }, [repasswd])

    const submitHandler = () => {
        e.prevent.default()
        setLoading(true)
        const response = signUp(user)
        setLoading(false)
        if (response.status === 200) {
            setMessage(response.massage)
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={(e) => {
                    setUser({ ...user, firstName: e.target.value })
                }} />
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={(e) => {
                    setUser({ ...user, lastName: e.target.value })
                }}
            />
            <label htmlFor="email">Email</label>
            <input
                error={emailErr}
                type="email"
                name="email"
                value={user.email}
                onChange={(e) => {
                    setUser({ ...user, email: e.target.value });
                }} />
            <label htmlFor="phone">Phone</label>
            <input
                type="number"
                name="phone"
                value={user.phone}
                onChange={(e) => {
                    setUser({ ...user, phone: e.target.value })
                }} />
            <label htmlFor="password">Password</label>
            <input
                error={passwdErr}
                type="password"
                name="password"
                value={user.password}
                onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                }} />
            <label htmlFor="repasswd">Password</label>
            <input
                error={passwdErr}
                type="password"
                name="repasswd"
                value={repasswd}
                onChange={(e) => {
                    setRePasswd(e.target.value);
                }} />
            <button type="submit">SIGN UP</button>
        </form>
    )
}

export default SignUp