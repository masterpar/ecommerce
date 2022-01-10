import React from 'react';
import Link from "next/link";

export const TopStart = ({logout}) => {
    return (
        <div className="header-top theme1 bg-dark py-15">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-7 order-last order-md-first">
                        <div className="static-info text-center text-md-left">
                            <p className="text-white">Join our showroom and get <span className="theme-color">50 % off</span> !
                                Coupon code : <span className="theme-color">Junno50</span></p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <nav className="navbar-top pb-2 pb-md-0 position-relative">
                            <ul className="d-flex justify-content-center justify-content-md-end align-items-center">
                                <li>
                                    <a href="#" id="dropdown1" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false" className="">Setting <i
                                        className="ion ion-ios-arrow-down"> </i></a>
                                    <ul className="topnav-submenu dropdown-menu" aria-labelledby="dropdown1">
                                        <li><Link href='/account'>My account</Link></li>
                                        <li><a href="">Checkout</a></li>
                                        <li><a href="" onClick={logout}>Sign out</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" id="dropdown2" data-toggle="dropdown" aria-haspopup="true"
                                       aria-expanded="false">USD $ <i className="ion ion-ios-arrow-down"> </i>
                                    </a>
                                    <ul className="topnav-submenu dropdown-menu" aria-labelledby="dropdown2">
                                        <li className="active"><a href="#">EUR €</a></li>
                                        <li><a href="#">USD $</a></li>
                                    </ul>
                                </li>
                                <li className="english">
                                    <a href="#" id="dropdown3" className="pr-0" data-toggle="dropdown"
                                       aria-haspopup="true" aria-expanded="false">
                                        <img src="assets/img/logo/us-flag.jpg" alt="us flag"/> English
                                        <i className="ion ion-ios-arrow-down"> </i>
                                    </a>
                                    <ul className="topnav-submenu dropdown-menu" aria-labelledby="dropdown3">
                                        <li className="active">
                                            <a href="#"><img src="assets/img/logo/us-flag.jpg" alt="us flag"/>
                                                English</a>
                                        </li>
                                        <li>
                                            <a href="#"><img src="assets/img/logo/france.jpg" alt="france flag"/>
                                                Français</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
