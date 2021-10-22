import React from 'react';

export const LoginForm = ({ showRegisterForm }) => {
    return (
        <div className="account-form-wrap">
            <div className="login-form">
                <div className="content">
                    <h4 className="title">Login</h4>
                    <p>Please login using account detail bellow.</p>
                </div>
                <form action="#">
                    <div className="col-12">
                        <div className="form-group">
                            <input className="form-control" type="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <input className="form-control" type="password" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="login-form-group">
                            <button className="btn-sign" type="submit">Sign In</button>
                            <a className="btn-pass-forgot" href="#">Forgot your password?</a>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="account-optional-group">
                            <a className="btn-create" onClick={showRegisterForm} href="#">Crear Cuenta</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
