import React, { useState } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'


export const RegisterForm = ({ showLoginForm }) => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationsSchema()),
        onSubmit: (formData) => {
            console.log(formData)
        }
    })

    return (
        <div className="account-form-wrap">
            <div className="login-form">
                <div className="content">
                    <h4 className="title">Registrate</h4>
                    <p>Crear una Nueva Cuenta</p>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name='name'
                                placeholder="Nombre"
                                onChange={formik.handleChange}
                                error={formik.errors.name}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name='lastname'
                                placeholder="Apellidos"
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                name='username'
                                placeholder="Nombre de Usuario"
                                onChange={formik.handleChange}
                            />
                        </div>
                    </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    name='email'
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    name='password'
                                    placeholder="Password"
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="login-form-group justify-content-center">
                                <button className="btn-sign" type="submit">Crear Cuenta</button>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="account-optional-group">
                                <a className="btn-create" onClick={showLoginForm} href="#">Iniciar Sesión</a>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    );
};

const initialValues = () => {
    return {
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    }
}

const validationsSchema = () => {
    return {
        name: Yup.string().required(true),
        lastname: Yup.string().required('apellido obligatorio'),
    }
}
