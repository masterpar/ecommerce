import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import {BasicModal} from "../../components/Modal/BasicModal/BasicModal";


export const BasicLayout = ({ children }) => {


    return (
        <>

            <div className="offcanvas-overlay" style={{display: 'none'}} > </div>

            {/*offcanvas-mobile-menu start*/}
            <div id="offcanvas-mobile-menu" className="offcanvas theme1 offcanvas-mobile-menu">
                <div className="inner">
                    <div className="border-bottom mb-4 pb-4 text-right">
                        <button className="offcanvas-close">×</button>
                    </div>
                    <div className="offcanvas-head mb-4">
                        <nav className="offcanvas-top-nav">
                            <ul className="d-flex justify-content-center align-items-center">
                                <li className="mx-4"><a href="compare.html"> <i
                                    className="ion-ios-loop-strong"> </i> Compare <span>(0)</span>
                                </a></li>
                                <li className="mx-4">
                                    <a href="wishlist.html"> <i className="ion-android-favorite-outline"> </i> Wishlist
                                        <span>(0)</span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <nav className="offcanvas-menu">
                        <ul>
                            <li><span className="menu-expand"> </span><a href="#"><span className="menu-text">Home</span></a>
                                <ul className="offcanvas-submenu">
                                    <li><a href="index.html">Home 1</a></li>
                                    <li><a href="index-2.html">Home 2</a></li>
                                    <li><a href="index-3.html">Home 3</a></li>
                                    <li><a href="index-4.html">Home 4</a></li>
                                </ul>

                            </li>
                            <li><span className="menu-expand"> </span><a href="#"><span className="menu-text">Shop</span></a>
                                <ul className="offcanvas-submenu">
                                    <li><span className="menu-expand"> </span>
                                        <a href="#"><span className="menu-text">Shop Grid</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="shop-grid-3-column.html">Shop Grid 3 Column</a></li>
                                            <li><a href="shop-grid-4-column.html">Shop Grid 4 Column</a></li>
                                            <li><a href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar</a></li>
                                            <li><a href="shop-grid-right-sidebar.html">Shop Grid Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="menu-expand"> </span>
                                        <a href="#"><span className="menu-text">Shop List</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="shop-grid-list.html">Shop List</a></li>
                                            <li><a href="shop-grid-list-left-sidebar.html">Shop List Left Sidebar</a>
                                            </li>
                                            <li><a href="shop-grid-list-right-sidebar.html">Shop List Right Sidebar</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><span className="menu-expand"> </span>
                                        <a href="#"><span className="menu-text">Shop Single</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="single-product.html">Shop Single</a></li>
                                            <li><a href="single-product-configurable.html">Shop Variable</a></li>
                                            <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                            <li><a href="single-product-group.html">Shop Group</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="menu-expand"> </span>
                                        <a href="#"><span className="menu-text">other pages</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="about-us.html">About Page</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="compare.html">Compare Page</a></li>
                                            <li><a href="login.html">Login &amp; Register Page</a></li>
                                            <li><a href="myaccount.html">Account Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><span className="menu-expand"> </span><a href="#"><span
                                className="menu-text">Pages</span></a>
                                <ul className="offcanvas-submenu">
                                    <li><a href="about-us.html">About Page</a></li>
                                    <li><a href="cart.html">Cart Page</a></li>
                                    <li><a href="checkout.html">Checkout Page</a></li>
                                    <li><a href="compare.html">Compare Page</a></li>
                                    <li><a href="login.html">Login &amp; Register Page</a></li>
                                    <li><a href="myaccount.html">Account Page</a></li>
                                    <li><a href="wishlist.html">Wishlist Page</a></li>
                                </ul>
                            </li>
                            <li><span className="menu-expand"> </span><a href="#"><span className="menu-text">Blog</span></a>
                                <ul className="offcanvas-submenu">
                                    <li><span className="menu-expand"> </span><a href="#"><span className="menu-text">Blog Grid</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="blog-grid-3-column.html">Blog Grid 3 column</a></li>
                                            <li><a href="blog-grid-4-column.html">Blog Grid 4 column</a></li>
                                            <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                            </li>
                                            <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="menu-expand"> </span><a href="#"><span className="menu-text">Blog List</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                            <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li><span className="menu-expand"> </span><a href="#"><span className="menu-text">Blog Single</span></a>
                                        <ul className="offcanvas-submenu">
                                            <li><a href="single-blog.html">Single Blog</a></li>
                                            <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a>
                                            </li>
                                            <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidbar</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
                    <div className="offcanvas-social py-30">
                        <ul>
                            <li>
                                <a href="#"><i className="icon-social-facebook"> </i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-twitter"> </i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-instagram"> </i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-google"> </i></a>
                            </li>
                            <li>
                                <a href="#"><i className="icon-social-instagram"> </i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            {/*OffCanvas Wishlist Start */}
            <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist theme1">
                <div className="inner">
                    <div className="head d-flex flex-wrap justify-content-between">
                        <span className="title">Wishlist</span>
                        <button className="offcanvas-close">×</button>
                    </div>
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image">
                                <img src="assets/img/product/4.jpg" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Walnut Cutting Board</a>
                                <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image">
                                <img src="assets/img/product/5.jpg" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Lucky Wooden Elephant</a>
                                <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image">
                                <img src="assets/img/product/6.jpg" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Fish Cut Out Set</a>
                                <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                    <a href="wishlist.html"
                       className="btn theme--btn-default btn--lg d-block d-sm-inline-block rounded-5 mt-30">view
                        wishlist</a>
                </div>
            </div>

            {/*OffCanvas Cart Start */}
            <div id="offcanvas-cart" className="offcanvas offcanvas-cart theme1">
                <div className="inner">
                    <div className="head d-flex flex-wrap justify-content-between">
                        <span className="title">Cart</span>
                        <button className="offcanvas-close">×</button>
                    </div>
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image">
                                <img src="assets/img/product/1.jpg" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Walnut Cutting Board</a>
                                <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image">
                                <img src="assets/img/product/2.jpg"  alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Lucky Wooden Elephant</a>
                                <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image">
                                <img src="assets/img/product/3.jpg" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Fish Cut Out Set</a>
                                <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                    <div className="sub-total d-flex flex-wrap justify-content-between">
                        <strong>Subtotal :</strong>
                        <span className="amount">$144.00</span>
                    </div>
                    <a href="cart.html"
                       className="btn theme--btn-default btn--lg d-block d-sm-inline-block rounded-5 mr-sm-2">view
                        cart</a>
                    <a href="checkout.html"
                       className="btn theme-btn--dark1 btn--lg d-block d-sm-inline-block mt-4 mt-sm-0 rounded-5">checkout</a>
                    <p className="minicart-message">Free Shipping on All Orders Over $100!</p>
                </div>
            </div>

            {/*header*/}
            <Header />

            {/*content*/}
            <div className='product-tab bg-white pt-10 pb-50'>
                <div className="container">
                    <div className="row"> {children}</div>
                </div>
                {  children }
            </div>

            {/*Footer*/}
            {/*<Footer/>*/}

            <BasicModal/>
        </>
    );
};
