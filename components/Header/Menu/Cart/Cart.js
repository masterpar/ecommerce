import React from 'react';
import Link from "next/link";


export const Cart = () => {
    return (
        <li className="mini-cart mx-2">
            <a className="action-item" href="#">
                <i className="zmdi zmdi-shopping-cart-plus icon"> </i>
                <span className="cart-quantity">2</span>
            </a>
            <div className="mini-cart-dropdown">
                <div className="cart-item">
                    <div className="thumb">
                        <img className="w-100" src="/img/shop/cart/2.jpg" alt="Image-HasTech"/>
                    </div>
                    <div className="content">
                        <h5 className="title"><a href="#">Literature classNameical - s</a></h5>
                        <span className="product-quantity">1 ×</span>
                        <span className="product-price">$79.00</span>
                        <a className="cart-trash" href="#"><i className="fa fa-trash"> </i></a>
                    </div>
                </div>
                <div className="cart-total-money">
                    <h5>Total: <span className="money">$159.00</span></h5>
                </div>
                <div className="cart-btn">
                    <Link href="/pedidos">Ver Pedidos</Link>
                    <a href="#">Ir a Pagar</a>
                </div>
            </div>
        </li>
    );
};
