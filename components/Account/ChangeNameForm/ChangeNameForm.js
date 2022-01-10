import React, { useState} from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {updateNameApi} from "../../../api/user";


export const ChangeNameForm = ({user,logout, setReloadUser}) => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(user.name, user.email),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            const response = await updateNameApi(user.id, formData, logout)
            if(!response){
                toast.error('Error al actualizar')
            } else {
                toast.success('Datos Actualizados')
                setReloadUser()
            }
            setLoading(false)
        }
    })

    return (
        <div className="product-review-content">

            <div className="reviews-form-area show">
                <h4 className="title">Tus Datos</h4>
                <div className="reviews-form-content">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="for_name">Nombre</label>
                                    <input id="for_name"
                                           className={`form-control ${formik.errors.name && "error-label"}`}
                                           type="text"
                                           name='name'
                                           placeholder="Nombre"
                                           onChange={formik.handleChange}
                                           value={formik.values.name}
                                           error={formik.errors.name}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label >E-mail</label>
                                    <input id="for_email"
                                           className={`form-control ${formik.errors.email && "error-label"}`}
                                           type="text"
                                           name='email'
                                           placeholder="usuario@correo.com"
                                           onChange={formik.handleChange}
                                           value={formik.values.email}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="for_review-title">Review Title</label>
                                    <input id="for_review-title" className="form-control" type="text"
                                           placeholder="Give your review a title"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label >Body of Review (1500)</label>
                                    <textarea id="for_comment" className="form-control"
                                              placeholder="Write your comments here"
                                    > </textarea>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-submit-btn text-center">
                                    <button type="submit" className="btn-submit">
                                        { loading &&
                                        <span
                                            className="spinner-border spinner-border-sm mx-1">
                                        </span>
                                        }
                                        Actualizar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

function initialValues(name = '', email= '') {
    return {
        name: name || "",
        email: email || ""
    }
}

function validationSchema() {
    return {
        name: Yup.string().required(true),
        email: Yup.string().required(true)
    }
}

