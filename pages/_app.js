import React, {useState, useMemo, useEffect} from "react";

import '../scss/global.scss'
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from "react-toastify";
import AuthContext from "../context/authContext";
import jwtDecode from "jwt-decode";
import {getToken, setToken} from "../api/token";



function MyApp({ Component, pageProps }) {

    const [auth, setAuth] = useState(undefined);
    const [reloadUser, setReloadUser] = useState(false);

    //Todo valid user
    useEffect(() => {
        const token = getToken()
        if(token){
            setAuth({
                token,
                idUser: jwtDecode(token).id
            })
        } else {
            setAuth(null)
        }
    }, [reloadUser]);

//Todo JWT
    const login = (token) => {
        setToken(token) //set local storage
        setAuth({
            token,
            idUser: jwtDecode(token).id
        })
    }

    //Todo useContext
    const authData = useMemo(() =>( {
            auth,
            login,
            logout: () => null,
            setReloadUser
    }),
    [auth]
    )

    if(auth === undefined) return null

  return (
      <AuthContext.Provider value={authData}>
            <Component {...pageProps} />
            <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
            />
        </AuthContext.Provider>
  )
}

export default MyApp
