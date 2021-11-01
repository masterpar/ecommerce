import Link from "next/link";


export const Account = ({onSetShow, user, logout}) => (

        <li className="currency-menu mx-2">
        { user && (
                    <Link className="action-item"  href="/cuenta" >
                        <i className="zmdi zmdi-account-o icon link-n"> </i>
                    </Link>
            )
        }
        </li>
    )

