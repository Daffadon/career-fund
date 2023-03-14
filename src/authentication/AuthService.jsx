import axios, { AxiosError } from "axios";
import BASE_URL from '../constants/apiUrl'
import Cookies from "js-cookie";


export const setTokenCookies = token => {
    Cookies.set("token", token, { expires: 2 / 24 });
}

export const getExpiresCookies = () => {
    return Cookies.get('expires');
}

export const getTokenCookies = () => {
    return Cookies.get('token');
}


export const login = async (email, passwd) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            passwd
        })
        const token = response.data.token;
        if (!token) {
            throw new Error("Email atau Password Anda Salah")
        }
        setTokenCookies(token)
        return token
    } catch (e) {
        return e.data
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
        // await login(email, password)

    } catch (e) {
        throw new AxiosError(e.message)
    }
}
export const logOut = async () => {
    try {
        await axios.post(`${BASE_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${getTokenCookies()}`
            }
        })
        Cookies.remove('token')
        setTimeout(() => {
            location.reload()
        }, 1500)
    } catch (e) {
        return e.data
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