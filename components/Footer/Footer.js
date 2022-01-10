import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-light theme1 position-relative">
            {/*-- footer bottom start -->*/}
            <div className="footer-bottom pt-80 pb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-30">
                            <div className="footer-widget mx-w-400">
                                <div className="footer-logo mb-35">
                                    <a href="index.html">
                                        <img src="assets/img/logo/logo-dark.jpg" alt="footer logo"/>
                                    </a>
                                </div>
                                <p className="text mb-30">We are a team of designers and developers that create high
                                    quality
                                    Magento, Prestashop, Opencart.</p>
                                <div className="address-widget mb-30">
                                    <div className="media">
                                <span className="address-icon mr-3">
                                    <img src="assets/img/icon/phone.png" alt="phone"/>
                                </span>
                                        <div className="media-body">
                                            <p className="help-text text-uppercase">NEED HELP?</p>
                                            <h4 className="title text-dark"><a href="tel:+1(123)8889999">(+800) 345
                                                678</a></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="social-network">
                                    <ul className="d-flex">
                                        <li><a href="https://www.facebook.com/" target="_blank">
                                            <span  className="icon-social-facebook"> </span></a></li>
                                        <li><a href="https://twitter.com/" target="_blank">
                                            <span className="icon-social-twitter"> </span></a></li>
                                        <li><a href="https://www.youtube.com/" target="_blank">
                                            <span className="icon-social-youtube"> </span></a></li>
                                        <li className="mr-0"><a href="https://www.instagram.com/" target="_blank">
                                            <span className="icon-social-instagram"> </span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-30">
                           <div className="footer-widget">
                                <div className="border-bottom cbb1 mb-25">
                                    <div className="section-title pb-20">
                                        <h2 className="title text-dark text-uppercase">Information</h2>
                                    </div>
                                </div>
                                {/*-- footer-menu start -->*/}
                                <ul className="footer-menu">
                                    <li><a href="#">Delivery</a></li>
                                    <li><a href="about-us.html">About us</a></li>
                                    <li><a href="#">Secure payment</a></li>
                                    <li><a href="contact.html">Contact us</a></li>
                                    <li><a href="#">Sitemap</a></li>
                                    <li><a href="#">Stores</a></li>
                                </ul>
                                {/*-- footer-menu end -->*/}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2 mb-30">
                            <div className="footer-widget">
                                <div className="border-bottom cbb1 mb-25">
                                    <div className="section-title pb-20">
                                        <h2 className="title text-dark text-uppercase">Custom Links</h2>
                                    </div>
                                </div>
                                {/*-- footer-menu start -->*/}
                                <ul className="footer-menu">
                                    <li><a href="#">Legal Notice</a></li>
                                    <li><a href="#">Prices drop</a></li>

                                    <li><a href="#">New products</a></li>

                                    <li><a href="#">Best sales</a></li>

                                    <li><a href="login.html">Login</a></li>

                                    <li><a href="myaccount.html">My account</a></li>
                                </ul>
                                {/*-- footer-menu end -->*/}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-30">
                            <div className="footer-widget">
                                <div className="border-bottom cbb1 mb-25">
                                    <div className="section-title pb-20">
                                        <h2 className="title text-dark text-uppercase">Newsletter</h2>
                                    </div>
                                </div>
                                <p className="text mb-20">You may unsubscribe at any moment. For that purpose, please
                                    find our
                                    contact info in the legal notice.</p>
                                <div className="nletter-form mb-35">
                                    <form className="form-inline position-relative"
                                          action="http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef"
                                          target="_blank" method="post">
                                        <input className="form-control" type="text" placeholder="Your email address"/>
                                            <button className="btn nletter-btn text-capitalize" type="submit">Sign
                                                up
                                            </button>
                                    </form>
                                </div>

                                <div className="store d-flex">
                                    <a href="https://www.apple.com/" className="d-inline-block mr-3">
                                        <img src="assets/img/icon/apple.png" alt="apple icon"/> </a>
                                    <a href="https://play.google.com/store/" className="d-inline-block">
                                        <img src="assets/img/icon/play.png" alt="apple icon"/> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*-- footer bottom end -->*/}
            {/*-- coppy-right start -->*/}
            <div className="coppy-right pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="text-left">
                                <p className="mb-3 mb-md-0">Copyright © <a href="https://hasthemes.com/">HasThemes</a>.
                                    All
                                    Rights Reserved</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="text-left">
                                <img src="assets/img/payment/1.png" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*-- coppy-right end -->*/}
        </footer>
    );
};
