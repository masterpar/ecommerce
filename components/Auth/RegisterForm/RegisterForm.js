import React, { useState } from 'react';
import {useFormik} from "formik";
import * as Yup from 'yup'
import {error} from "next/dist/build/output/log";


export const RegisterForm = ({ showLoginForm }) => {

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationsSchema()),
        onSubmit: (formData) => {
            console.log(formData)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="col-12">
                <div className="form-group border-1">
                    <input
                        className={ formik.errors.name ? "form-control border-danger " : 'form-control'}
                        type="text"
                        name='name'
                        placeholder="Nombre"
                        onChange={formik.handleChange}
                    />
                </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <input
                        className={ formik.errors.lastname ? "form-control border-danger " : 'form-control'}
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
                        className={ formik.errors.username ? "form-control border-danger " : 'form-control'}
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
                        className={ formik.errors.email ? "form-control border-danger " : 'form-control'}
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
                        className={ formik.errors.password ? "form-control border-danger " : 'form-control'}
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
                <div className="account-optional-group text-center">
                    <a className="btn-create" onClick={showLoginForm} href="#">Iniciar Sesión</a>
                </div>
            </div>
        </form>
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
        username: Yup.string().required('apellido obligatorio'),
        email: Yup.string().email(true).required(true),
        password: Yup.string().required(true),
    }
}
