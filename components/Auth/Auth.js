import React, { useState } from 'react';
import {LoginForm} from "./LoginForm/LoginForm";
import {RegisterForm} from "./RegisterForm/RegisterForm";

export const Auth = ({onCloseModal, setTitleModal}) => {
    const [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => {
        setShowLogin(true)
        setTitleModal('Iniciar sesión')
    }
    const showRegisterForm = () => {
        setShowLogin(false)
        setTitleModal('Crear Nuevo usuario')
    }


    return showLogin ?
        <LoginForm showRegisterForm={showRegisterForm} onCloseModal={onCloseModal}/>
        :
        <RegisterForm showLoginForm={showLoginForm} onCloseModal={onCloseModal}/>

}
