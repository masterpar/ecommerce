import { useState } from 'react';

export const BasicModal = ({show, setShow, title, children, ...rest}) => {

    const onClose = () => {
        setShow(false)
    }
    return (
        <div>
            <aside className={ !show ? 'product-quick-view-modal' : 'product-quick-view-modal active'} >
                <div className="product-quick-view-inner">
                    <div className="product-quick-view-content ">
                        <button type="button" className="btn-close" onClick={onClose}>
                            <span className="close-icon"><i className="fa fa-close"> </i></span>
                        </button>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="thumb">
                                    <img src="/img/shop/quick-view1.jpg" alt="Alan-Shop"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="content text-center">
                                    <h4 className="title text-center">{ title }</h4>
                                    { children }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvas-overlay"></div>
            </aside>
        </div>
    );
};
