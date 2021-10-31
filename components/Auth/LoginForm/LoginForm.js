import React, { useState } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import {loginApi} from "../../../api/user";
import {toast} from "react-toastify";


export const LoginForm = ({ showRegisterForm , onCloseModal}) => {

    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationsSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            const response = await loginApi((formData))
            console.log(response?.jwt)
            setLoading(false)
            if(response?.jwt){
                toast.success('Sessión Iniciada')
                onCloseModal()
            } else {
                toast.error('Datos no coinciden')
            }
        }
    })

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
                    <a className="btn-create" onClick={showRegisterForm} href="#">
                        Crear Nueva Cuenta
                    </a>
                    <a className="btn-create btn mx-2"  href="#">
                        Olvidé mi Contraseña
                    </a>
                </div>
            </div>
        </form>
    );
};

const initialValues = () => {
    return {
        identifier: '',
        password: '',
    }
}

const validationsSchema = () => {
    return {
        identifier: Yup.string().required(true),
        password: Yup.string().required(true),
    }
}
