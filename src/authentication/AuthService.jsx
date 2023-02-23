import axios from "axios";
import { BASE_URL } from '../constants/apiUrl'

    export const login = async (loginForm) => {
    try {
        const response = await axios.post(`${BASE_URL}+/login`, {
            loginForm
        })
        const tokenFetched = response.data.token;
        if (tokenFetched) {
            localStorage.setItem('user', JSON.stringify(tokenFetched))
        }
        return response.data
    } catch (e) {
        return e.data
    }
}

export const signUp = async (signUpForm) => {
    try {
        const response = await axios.post(`${BASE_URL}+/signUp`,
            signUpForm
        )
        return response.data
    } catch (e) {
        return e.data
    }
}

export const isAuthenticated = async (token) => {
    try {
        await axios.get(`${BASE_URL}+/user`, {
            Headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return true
    } catch (e) {
        return false
    }
}