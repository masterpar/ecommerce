import React, {useMemo} from "react";
import '../scss/global.scss'

import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from "react-toastify";
import AuthContext from "../context/authContext";
import jwtDecode from "jwt-decode";


function MyApp({ Component, pageProps }) {


    //Todo useContext
    const authData = useMemo(() =>( {
            auth: { name: "camilo", username: "camilo"},
            login: () => null,
            logout: () => null,
            setReloadUser: () => null
    }),
    []
    )

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
