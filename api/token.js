import {TOKEN} from "../utils/constants";
import jwtDecode from "jwt-decode";


export const setToken = (token) => {
    localStorage.setItem(TOKEN,token)
}

export const getToken = (token) => {
   return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN)
}

export const hasExpiredToken = (token) => {
    const decodeToken = jwtDecode(token)
    const expireDate = decodeToken.exp * 1000
    const currentDate = new Date().getTime()
    return currentDate > expireDate;
}
