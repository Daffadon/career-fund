import axios, { AxiosError } from "axios";
import BASE_URL from "../constants/apiUrl";
import { getTokenCookies } from "../authentication/AuthService";

export const getLanding = async()=>{
      try {
            const response = await axios.get(`${BASE_URL}/landing`)
            return response.data
      } catch (error) {
            throw new AxiosError(error.response.data.message)
      }
}

export const getUser = async ()=>{
      try {
            const response = await axios.get(`${BASE_URL}/user/profile`,{
                  'Authorization': `Bearer ${getTokenCookies()}`
            })
            return response
      } catch (error) {
            throw new AxiosError(error.response.data.message)
      }
}