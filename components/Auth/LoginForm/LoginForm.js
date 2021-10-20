import React from 'react';

export const LoginForm = ({ showRegisterForm }) => {
    return (
        <div>
            <h2> LoginForm </h2>
            <button
                className='btn btn-primary'
                onClick={showRegisterForm}
            >
                Registro
            </button>
        </div>
    );
};
