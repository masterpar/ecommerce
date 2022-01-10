import React, { useState } from 'react';
import {BasicModal} from "../../Modal/BasicModal/BasicModal";
import {LoginForm} from "../../Auth/LoginForm/LoginForm";


export const OptionsUser = ({user}) => {


    const [showModal, setShowModal] = useState(false);

    return (
        <div
            className="d-flex align-items-center justify-content-center justify-content-sm-end mr-3">

            { user &&
            <div className="cart-block-links theme1">
                <ul className="d-flex align-self-center">
                    <li>
                        <a>
                            <span className="cart-total position-relative">{user.name}</span>
                            {/*<i className="icon-login"> </i>*/}
                        </a>
                    </li>
                </ul>
            </div>
            }

            {/*Login User*/}
            { !user &&
            <div className="cart-block-links theme1">
                <ul className="d-flex">
                    <li>
                        <a onClick={() => setShowModal(true)} style={{cursor: 'pointer'}}>
                                <span className="position-relative color-primary">
                                    <span className="cart-total position-relative mr-2">Ingresar</span>
                                    <i className="icon-user"> </i>
                                </span>
                        </a>
                    </li>
                </ul>
            </div>
            }

            {/*wishlist - cart User*/}
                <div className="cart-block-links theme1">
                    <ul className="d-flex">
                        <li>
                            <a className="offcanvas-toggle" href="#offcanvas-wishlist">
                                        <span className="position-relative">
                                            <i className="icon-heart"> </i>
                                            <span className="badge cbdg1">3</span>
                                        </span>
                            </a>
                        </li>
                        <li className="mr-0 cart-block position-relative">
                            <a className="offcanvas-toggle" href="#offcanvas-cart">
                                        <span className="position-relative">
                                            <i className="icon-bag"> </i>
                                            <span className="badge cbdg1">3</span>
                                        </span>
                                <span className="cart-total position-relative">$90.000</span>
                            </a>
                        </li>
                        {/*cart block end */}
                    </ul>
                </div>

            {/*MODAL*/}
            <BasicModal
            title="Login"
            setShow={setShowModal}
            show={showModal}
            >
                <LoginForm
                onCloseModal={setShowModal}
                />
            </BasicModal>

            <div className="mobile-menu-toggle theme1 d-lg-none">
                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                    <svg viewBox="0 0 800 600">
                        <path
                            d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                            id="top"> </path>
                        <path d="M300,320 L540,320" id="middle"> </path>
                        <path
                            d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                            id="bottom"
                            transform="translate(480, 320) scale(1, -1) translate(-480, -318)">
                        </path>
                    </svg>
                </a>
            </div>
        </div>
    );
};
