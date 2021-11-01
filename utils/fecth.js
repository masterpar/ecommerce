import {getToken, hasExpiredToken} from "../api/token";

export const authFectch = async (url, params, logout) => {
    const token = getToken();

    if(!token){
        //User no logged
        logout()
    } else {
        if(hasExpiredToken(token)){
            //Token expired
            logout()
        } else {
            const paramsTemp = {
                ...params,
                headers:{
                    ...params?.header,
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const response = await fetch(url, paramsTemp)
                const result = await response.json()
                return result
            } catch (e) {
                console.log(e)
            }

        }
    }
}
