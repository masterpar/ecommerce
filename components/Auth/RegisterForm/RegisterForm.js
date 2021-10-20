import React from 'react';

export const RegisterForm = ({ showLoginForm }) => {
    return (
        <div>
            <h2> RegisterForm </h2>
            <button
                className='btn btn-primary'
                onClick={showLoginForm}
            >
                Registro
            </button>
        </div>
    );
};
