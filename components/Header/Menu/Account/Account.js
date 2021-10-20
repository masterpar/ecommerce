import React from 'react';

export const Account = ({onSetShow}) => {

    return (
        <li className="currency-menu">
            <a className="action-item" href="#"><i className="zmdi zmdi-lock-outline icon"> </i></a>
            <ul className="currency-dropdown p-3">
                <li className="account ">
                    <a href="#"><span className="current-account">My account</span></a>
                    <ul>
                        <li onClick={onSetShow} ><a href='#'  >Login</a></li>
                    </ul>
                </li>
            </ul>
        </li>
    );
};
