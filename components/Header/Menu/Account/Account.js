

export const Account = ({onSetShow, auth, logout}) => {

    return (
        <li className="currency-menu">
        { !auth?.idUser ? (
                    <a className="action-item" onClick={onSetShow}  href="#">
                        <i className="zmdi zmdi-account-o icon"> </i>
                    </a>
            ) : (
                    <a className="action-item" onClick={logout}  href="#" title='Cerrar Sesión'>
                        <i className="zmdi zmdi-sign-in icon"> </i>
                    </a>
            )
        }
        </li>
    )
}
