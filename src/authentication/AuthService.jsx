import axios from "axios";
import BASE_URL from '../constants/apiUrl'

export const getToken = () => {
    return localStorage.getItem('user');
}

export const login = async (email, passwd) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            passwd
        })
        const tokenFetched = response.data.token;
        localStorage.setItem('user', JSON.stringify(tokenFetched))
        setTimeout(() => {
            location.reload()
        }, 1500)
        return response.data.token
    } catch (e) {
        return e.data
    }
}

export const signUp = async ({ name, email, phone, password }) => {
    try {
        await axios.post(`${BASE_URL}/signUp`, {
            name,
            email,
            phone,
            password
        })
        await login(email, password)
    } catch (e) {
        return e.data
    }
}
export const logOut = async () => {
    try {
        await axios.post(`${BASE_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${getToken()}`
            }
        })
        localStorage.removeItem('user');
        setTimeout(() => {
            location.reload()
        }, 1500)
    } catch (e) {
        return e.data
    }
}

export const isAuthenticated = async () => {
    try {
        await axios.get(`${BASE_URL}/users`, {
            Headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        })
        return true
    } catch (e) {
        logOut();
        return false
    }
}