import {BASE_PATH} from "../utils/constants";
import {authFectch} from "../utils/fecth";

export const registerApi = async (formData) =>{
    try {
        const url = `${BASE_PATH}/auth/local/register`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await  fetch(url,params)
        const result = response.json()
        return result

    } catch (e) {
        console.log(e)
        return null
    }
}

export const loginApi = async (formData) =>{
    try {
        const url = `${BASE_PATH}/auth/local`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }
        const response = await  fetch(url,params)
        const result = response.json()
        return result

    } catch (e) {
        console.log(e)
        return null
    }
}

export const resetPasswordApi = async (email) =>{

    try {
        const url = `${BASE_PATH}/auth/forgot-password`;
        const params = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        }
        const response = await  fetch(url,params)
        const result = response.json()
        return result

    } catch (e) {
        console.log(e)
        return null
    }
}

export const getMeApi = async (logout) => {
    try {
        const url = `${BASE_PATH}/users/me`;
        const result = await authFectch(url, null, logout)
        return result ? result : null;
    } catch (e) {
        console.log(e)
    }
}

export const updateNameApi = async (idUser, data, logout) => {
    try {
        const url = `${BASE_PATH}/users/${idUser}`;
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        }
        const result = await authFectch(url, params)
        return result ? result : null;
    } catch (e) {
        console.log(e)
    }
}
