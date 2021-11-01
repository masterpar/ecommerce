import {useState, useEffect} from 'react';
import {BasicModal} from "../../../Modal/BasicModal/BasicModal";
import {Auth} from "../../../Auth/Auth";
import {Cart} from "../Cart/Cart";
import useAuth from "../../../../hooks/useAuth";
import {Account} from "../Account/Account";
import {getMeApi} from "../../../../api/user";

export const MenuUserOptions = () => {

    const [showModal, setShowModal] = useState(false);

    const onSetShow = () => setShowModal(true)
    const onCloseModal = () => setShowModal(false)
    const [titleModal, setTitleModal] = useState('Iniciar Sessión');
    const [user, setUser] = useState(undefined);
    const { auth, logout} = useAuth()

    useEffect(() => {
        (async  () => {
            const response = await getMeApi(logout)
            setUser(response)
        })()
    }, [auth]);

    return (
        <div className="header-action-area">
            <ul className="header-action">

                {/*Search*/}
                <Search/>

                {/*My Account*/}
                <Account onSetShow={onSetShow} auth={auth} logout={logout} />

                {/*cart shop*/}
                <Cart/>

            </ul>

            {/*Modal Auth*/}
            <BasicModal
                title={titleModal}
                show={showModal}
                setShow={setShowModal}
            >
                <Auth
                    onCloseModal={onCloseModal}
                    setTitleModal={setShowModal}
                />
            </BasicModal>
        </div>

    );
};

const Search = () => {
    return (
        <li className="search-item">
            <a className="action-item" href="#">
                <i className="zmdi zmdi-search icon"> </i>
                {/*<input type="text" autoComplete="off" value="" tabIndex="0" className="prompt"/>*/}
            </a>
            {/*<Search/>*/}
        </li>
    )
}

