import {useState} from 'react';
import {BasicModal} from "../../Modal/BasicModal/BasicModal";
import {Auth} from "../../Auth/Auth";
import {Cart} from "./Cart/Cart";
import {Account} from "./Account/Account";

export const MenuUserOptions = () => {

    const [showModal, setShowModal] = useState(false);

    const onSetShow = () => setShowModal(true)
    const onCloseModal = () => setShowModal(false)
    const [titleModal, setTitleModal] = useState('Iniciar Sessión');

    return (
        <div className="header-action-area">
            <ul className="header-action">

                {/*Search*/}
                <Search/>

                {/*My Account*/}
                <Account onSetShow={onSetShow}/>

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
                    setTitleModal={setTitleModal}
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
