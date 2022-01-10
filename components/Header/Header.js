import {useEffect, useState} from "react";
import useAuth from "../../hooks/useAuth";
import {getMeApi} from "../../api/user";
import {Menu} from "./Menu/Menu";
import {TopStart} from "./TopStart/TopStart";


export const Header = () => {

    const [user, setUser] = useState(undefined);
    const { auth, logout} = useAuth()

    useEffect(() => {
        (async  () => {
            const response = await getMeApi(logout)
            setUser(response)
        })()
    }, [auth]);

    console.log(user)
    //verificando usuario
    if(user === undefined) return null


    return (
        <>
           {/*<Menu/>*/}

            <header>

                 {/*header top start*/}
                {/*{ user &&*/}
                <TopStart logout={logout}/>
                {/*}*/}

                {/*header-middle satrt */}
                <Menu user={user}/>

                {/*header bottom start */}
                <nav id="sticky" className="header-bottom theme1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div
                                className="col-lg-10 offset-lg-2 d-flex flex-wrap align-items-center position-relative">
                                <ul className="main-menu d-flex">
                                    <li className="active ml-0">
                                        <a href="#" className="pl-0">Home <i className="ion-ios-arrow-down"> </i></a>
                                        <ul className="sub-menu">
                                            <li><a href="index.html">Home 1</a></li>
                                            <li><a href="index-2.html">Home 2</a></li>
                                            <li><a href="index-3.html">Home 3</a></li>
                                            <li><a href="index-4.html">Home 4</a></li>
                                        </ul>
                                    </li>
                                    <li className="position-static">
                                        <a href=" #">Shop <i className="ion-ios-arrow-down"> </i></a>
                                        <ul className="mega-menu row">
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">Shop Grid</a></li>
                                                    <li><a href="shop-grid-3-column.html">Shop Grid 3 Column</a></li>
                                                    <li><a href="shop-grid-4-column.html">Shop Grid 4 Column</a></li>
                                                    <li><a href="shop-grid-left-sidebar.html">Shop Grid Left Sidebar</a>
                                                    </li>
                                                    <li><a href="shop-grid-right-sidebar.html">Shop Grid Right
                                                        Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">Shop List</a></li>
                                                    <li><a href="shop-grid-list.html">Shop List</a></li>
                                                    <li><a href="shop-grid-list-left-sidebar.html">Shop List Left
                                                        Sidebar</a>
                                                    </li>
                                                    <li><a href="shop-grid-list-right-sidebar.html">Shop List Right
                                                        Sidebar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">Shop Single</a></li>
                                                    <li><a href="single-product.html">Shop Single</a></li>
                                                    <li><a href="single-product-configurable.html">Shop Variable</a>
                                                    </li>
                                                    <li><a href="single-product-affiliate.html">Shop Affiliate</a></li>
                                                    <li><a href="single-product-group.html">Shop Group</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-3">
                                                <ul>
                                                    <li className="mega-menu-title"><a href="#">other pages</a></li>
                                                    <li><a href="about-us.html">About Page</a></li>
                                                    <li><a href="cart.html">Cart Page</a></li>
                                                    <li><a href="checkout.html">Checkout Page</a></li>
                                                    <li><a href="compare.html">Compare Page</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-6 mt-4">
                                                <a href="single-product.html" className="zoom-in overflow-hidden"><img
                                                    src="assets/img/mega-menu/1.jpg" alt="img"/></a>
                                            </li>
                                            <li className="col-6 mt-4">
                                                <a href="single-product.html" className="zoom-in overflow-hidden"><img
                                                    src="assets/img/mega-menu/2.jpg" alt="img"/></a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Pages <i className="ion-ios-arrow-down"> </i></a>
                                        <ul className="sub-menu">
                                            <li><a href="about-us.html">About Page</a></li>
                                            <li><a href="cart.html">Cart Page</a></li>
                                            <li><a href="checkout.html">Checkout Page</a></li>
                                            <li><a href="compare.html">Compare Page</a></li>
                                            <li><a href="login.html">Login &amp; Register Page</a></li>
                                            <li><a href="myaccount.html">Account Page</a></li>
                                            <li><a href="wishlist.html">Wishlist Page</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Blog <i className="ion-ios-arrow-down"> </i></a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">Blog Grid</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-grid-3-column.html">Blog Grid 3 column</a></li>
                                                    <li><a href="blog-grid-4-column.html">Blog Grid 4 column</a></li>
                                                    <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-grid-right-sidebar.html">Blog Grid Right
                                                        Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog List</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-list-right-sidebar.html">Blog List Right
                                                        Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Blog Single</a>
                                                <ul className="sub-menu">
                                                    <li><a href="single-blog.html">Single Blog</a></li>
                                                    <li><a href="blog-single-left-sidebar.html">Blog Single Left
                                                        Sidebar</a>
                                                    </li>
                                                    <li><a href="blog-single-right-sidebar.html">Blog Single Right
                                                        Sidbar</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">contact Us</a></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>

                {/*category menu*/}
                <div className="mobile-category-nav theme1 d-lg-none py-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {/*--=======  category menu  =======*/}
                                <div className="hero-side-category">
                                    {/*Category Toggle Wrap -->*/}
                                    <div className="category-toggle-wrap">
                                        {/*Category Toggle -->*/}
                                        <button className="category-toggle"><i className="fa fa-bars"> </i> All
                                            Categories
                                        </button>
                                    </div>

                                    {/*Category Menu -->*/}
                                    <nav className="category-menu">
                                        <ul>
                                            <li className="menu-item-has-children menu-item-has-children-1">
                                                <a href="#">Accessories &amp; Parts<i
                                                    className="ion-ios-arrow-down"> </i></a>
                                                {/*category submenu -->*/}
                                                <ul className="category-mega-menu category-mega-menu-1">
                                                    <li><a href="#">Cables &amp; Adapters</a></li>
                                                    <li><a href="#">Batteries</a></li>
                                                    <li><a href="#">Chargers</a></li>
                                                    <li><a href="#">Bags &amp; Cases</a></li>
                                                    <li><a href="#">Electronic Cigarettes</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children menu-item-has-children-2">
                                                <a href="#">Camera &amp; Photo<i className="ion-ios-arrow-down"> </i></a>
                                                {/*category submenu -->*/}
                                                <ul className="category-mega-menu category-mega-menu-2">
                                                    <li><a href="#">Digital Cameras</a></li>
                                                    <li><a href="#">Camcorders</a></li>
                                                    <li><a href="#">Camera Drones</a></li>
                                                    <li><a href="#">Action Cameras</a></li>
                                                    <li><a href="#">Photo Studio Supplies</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children menu-item-has-children-3">
                                                <a href="#">Smart Electronics <i className="ion-ios-arrow-down"> </i></a>
                                                {/*category submenu -->*/}
                                                <ul className="category-mega-menu category-mega-menu-3">
                                                    <li><a href="#">Wearable Devices</a></li>
                                                    <li><a href="#">Smart Home Appliances</a></li>
                                                    <li><a href="#">Smart Remote Controls</a></li>
                                                    <li><a href="#">Smart Watches</a></li>
                                                    <li><a href="#">Smart Wristbands</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children menu-item-has-children-6">
                                                <a href="#">Video Game <i className="ion-ios-arrow-down"> </i></a>
                                                {/*category submenu -->*/}
                                                <ul className="category-mega-menu category-mega-menu-6">
                                                    <li><a href="#">Handheld Game Players</a></li>
                                                    <li><a href="#">Game Controllers</a></li>
                                                    <li><a href="#">Joysticks</a></li>
                                                    <li><a href="#">Stickers</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Televisions</a></li>
                                            <li><a href="#">Digital Cameras</a></li>
                                            <li><a href="#">Headphones</a></li>
                                            <li><a href="#">Wearable Devices</a></li>
                                            <li><a href="#">Smart Watches</a></li>
                                            <li><a href="#">Game Controllers</a></li>
                                            <li><a href="#"> Smart Home Appliances</a></li>
                                            <li className="hidden" ><a href="#">Projectors</a>
                                            </li>
                                            <li>
                                                <a href="#" id="more-btn"><i className="ion-ios-plus-empty"> </i>
                                                    More Categories</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>


        </>

    );
};
