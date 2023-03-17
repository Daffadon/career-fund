import axios, { AxiosError } from "axios";
import BASE_URL from "../constants/apiUrl";
import { getTokenCookies } from "../authentication/AuthService";

export const getLanding = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/landing`)
		return response.data
	} catch (error) {
		throw new AxiosError(error.response.data.message)
	}
}
export const getHome = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/home`, {
			headers: {
				'Authorization': `Bearer ${getTokenCookies()}`
			}
		})
		return response.data
	} catch (error) {
		throw new AxiosError(error.response.data.message)
	}
}
export const getAbout = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/about`)
		return response.data
	} catch (error) {
		throw new AxiosError(error.response.data.message)
	}
}

export const getUser = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/user/profile`, {
			headers: {
				'Authorization': `Bearer ${getTokenCookies()}`
			}
		})
		return response
	} catch (error) {
		throw new AxiosError(error.response.data.message)
	}
}
export const getProgram = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/user/program`, {
			headers: {
				'Authorization': `Bearer ${getTokenCookies()}`
			}
		})
		return response.data
	} catch (error) {
		throw new AxiosError(error.response.data.message)
	}
}

export const updateBio = async (user) => {
	try {
		await axios.post(`${BASE_URL}/user/profile/update`, {
			name: user.namaDepan,
			second_name: user.namaBelakang,
			email: user.email,
			telephone: user.telepon,
			region: user.negara,
			city: user.kota,
			postal: user.pos,
			education: user.pendidikan,
		}, {
			headers: {
				Authorization: `Bearer ${getTokenCookies()}`
			}
		})
	} catch (e) {
		throw new AxiosError(e.response.data.message)
	}
}
export const updatePayment = async (user) => {
	try {
		await axios.post(`${BASE_URL}/user/payment`, {
			type: user.metodePembayaran,
			credit: user.rekening,
			user_id : user.id,
		}, {
			headers: {
				Authorization: `Bearer ${getTokenCookies()}`
			}
		})
	} catch (e) {
		console.log(e)
		throw new AxiosError(e.response.data.message)
	}
}
export const sendEmailRecovery = async (email) => {
	try {
		await axios.post(`${BASE_URL}/reset`, {
			email
		})
	} catch (e) {
		console.log(e)
		throw new AxiosError(e.response.data.message)
	}
}
export const sendOtop = async (email,otp) => {
	try {
		await axios.post(`${BASE_URL}/resetotp`, {
			email,
			otp
		})
	} catch (e) {
		console.log(e)
		throw new AxiosError(e.response.data.message)
	}
}