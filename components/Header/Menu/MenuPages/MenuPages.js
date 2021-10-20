import {Container, Grid, Image, Input} from "semantic-ui-react";
import Link from "next/link";


export const MenuPages = () => {
    return (
        <div className="header-navigation-area">
            <ul className="main-menu nav position-relative">
                <li className="has-submenu"><a href="#">Home</a>
                    <ul className="submenu-nav">
                        <li><a href="#">Home Demo 1</a></li>
                        <li><a href="#">Home Demo 2</a></li>
                    </ul>
                </li>
                <li className="has-submenu full-width"><a href="#">Shop</a>
                    <ul className="submenu-nav submenu-nav-mega">
                        <li className="mega-menu-item"><a href="#" className="mega-title">Shop Layouts</a>
                            <ul>
                                <li><a href="#">Shop 3 Column</a></li>
                            </ul>
                        </li>
                        <li className="mega-menu-item"><a href="#" className="mega-title">Shop Pages</a>
                            <ul>
                                <li><a href="#">My Account</a></li>
                            </ul>
                        </li>
                        <li className="mega-menu-item"><a href="#/" className="mega-title">WOMEN</a>
                            <ul>
                                <li><a href="#">Bags &amp; Purses</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    );
};




