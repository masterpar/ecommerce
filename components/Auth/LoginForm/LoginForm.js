import React, { useState } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import {loginApi, resetPasswordApi} from "../../../api/user";
import {toast} from "react-toastify";
import useAuth from "../../../hooks/useAuth";


export const LoginForm = ({ showRegisterForm , onCloseModal}) => {

    const [loading, setLoading] = useState(false);
    const {auth, login} = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationsSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            const response = await loginApi((formData))
            setLoading(false)
            if(response?.jwt){
                login(response.jwt)
                toast.success('Iniciaste Sessión')
                onCloseModal()
            } else {
                toast.error('Datos no coinciden')
            }
        }
    })

    const resetpassword = () => {
        formik.setErrors({})
        const validateUser = Yup.string().email().required()

        if(!validateUser.isValidSync(formik.values.identifier)){
            formik.setErrors({ identifier: true })
        } else
            resetPasswordApi(formik.values.identifier)
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="col-12">
                <div className="form-group">
                    <input
                        className={ formik.errors.identifier ? "form-control border-danger " : 'form-control'}
                        type="text"
                        name='identifier'
                        placeholder="E-mail o Username"
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <input
                        className={ formik.errors.password ? "form-control border-danger " : 'form-control'}
                        type="password"
                        name='password'
                        placeholder="contraseña"
                        onChange={formik.handleChange}
                    />
                </div>
            </div>

            <div className="col-12">
                <div className="login-form-group justify-content-center">
                    <button className="btn-sign" type="submit">
                        {
                            loading && <span className="spinner-border spinner-border-sm mx-2" > </span>
                        }

                        Iniciar Sesión
                    </button>
                </div>
            </div>
            <div className="col-12">
                <div className="account-optional-group text-center">
                    <a className="btn-create font-monospace text-dark " onClick={showRegisterForm} href="#">
                        Crear Nueva Cuenta
                    </a>
                    <a className="btn-create btn mx-2 font-monospace text-secondary" onClick={resetpassword} href="#">
                        Olvidé mi Contraseña
                    </a>
                </div>
            </div>
        </form>
    );
};

const initialValues = () => {
    return {
        identifier: 'camilo',
        password: '123456',
    }
}

const validationsSchema = () => {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    }
}
