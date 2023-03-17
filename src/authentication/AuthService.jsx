import axios, { AxiosError } from "axios";
import BASE_URL from '../constants/apiUrl'
import Cookies from "js-cookie";


export const setTokenCookies = token => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 2 * 60 * 60 * 1000);
    Cookies.set("token", token, { expires });
    Cookies.set("expires", expires.toUTCString(), { expires })
}

export const getExpiresCookies = () => {
    return Cookies.get('expires');
}

export const getTokenCookies = () => {
    return Cookies.get('token');
}


export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            username: email,
            password
        })
        const token = response.data.token;
        if (!token) {
            throw new Error("Email atau Password Anda Salah")
        }
        setTokenCookies(token)
        return token
    } catch (e) {
        throw new AxiosError(e.response.data.message)
    }
}

export const signUp = async ({ name, email, phone, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, {
            name,
            email,
            telephone: phone,
            password
        })
        return response
    } catch (e) {
        throw new AxiosError(e.response.data.message)
    }
}
export const otpVerification = async ({ name, email, phone, password }, otpVerify) => {
    try {
        const response = await axios.post(`${BASE_URL}/otp`, {
            name,
            email,
            telephone: phone,
            password,
            otp: otpVerify
        })
        if (response) {
            setTokenCookies(response.data.token)
        }
        return response
    } catch (e) {
        throw new AxiosError(e.response.data.message)
    }
}
export const otpChangePassword = async (email) => {
    try {
        const response = await axios.post(`${BASE_URL}/register/otp`, {
            email,
            otp: otpVerify
        })
        if (response) {
            setTokenCookies(response.data.csrf_token)
        }
        return response
    } catch (e) {
        throw new AxiosError(e.response.data.message)
    }
}
export const logOut = async () => {
    try {
        await axios.get(`${BASE_URL}/user/logout`, {
            headers: {
                Authorization: `Bearer ${getTokenCookies()}`
            }
        })
        Cookies.remove('token')
        Cookies.remove('expires')
    } catch (e) {
        throw new AxiosError(e.response.data.message)
    }
}

export const isAuthenticated = () => {
    const expires = getExpiresCookies();
    if (expires && new Date(expires) > new Date()) {
        return true;
    } else {
        return false;
    }
}