import '../scss/global.scss'

import "../assets/css/ionicons.css"
import "../assets/css/material-design-iconic-font.css"
import "../assets/css/bootstrap.min.css"
import "../assets/css/style.css";

import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from "react-toastify";


function MyApp({ Component, pageProps }) {
  return <>
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
        </>
}

export default MyApp
