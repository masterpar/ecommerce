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
        <form onSubmit={formik.handleSubmit} className='log-in-form'>

                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-md-3 col-form-label">Email</label>
                    <div className="col-md-6">
                        <input
                            className={ formik.errors.identifier ? "form-control border-danger " : 'form-control'}
                            type="text"
                            name='identifier'
                            placeholder="E-mail o Username"
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>


                <div className="form-group row">
                    <label htmlFor="staticEmail" className="col-md-3 col-form-label">Password</label>
                    <div className="col-md-6">
                        <input
                            className={ formik.errors.password ? "form-control border-danger " : 'form-control'}
                            type="password"
                            name='password'
                            placeholder="contraseña"
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>


            <div className="form-group row text-center">
                <div className="col-md-6 offset-md-3">

                    <button className="btn theme-btn--dark1 btn--md" type="submit">
                        {
                            loading && <span className="spinner-border spinner-border-sm mx-2" > </span>
                        }

                        Iniciar Sesión
                    </button>
                </div>
            </div>

            <div className="form-group row text-center">
                <div className="col-md-6 offset-md-3">
                    <div className="login-form-links">
                        <a href="#" className="for-get">Forgot your password?</a>
                    </div>
                </div>
            </div>
            <div className="form-group row text-center mb-0">
                <div className="col-12">
                    <div className="border-top">
                        <a href="register.html" className="no-account">No account? Create one here</a>
                    </div>
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
