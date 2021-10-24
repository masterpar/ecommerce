import { useState } from 'react';

export const BasicModal = ({show, setShow, title, children, ...rest}) => {

    const onClose = () => {
        setShow(false)
    }
    return (
        <div>
            <aside className={ !show ? 'product-quick-view-modal' : 'product-quick-view-modal active'} >
                <div className="product-quick-view-inner">
                    <div className="product-quick-view-content" style={{  padding: '0', margin:'auto', maxWidth:'700px'}}>
                        <button type="button" className="btn-close"  onClick={onClose}>
                            <span className="close-icon"><i className="fa fa-close"> </i></span>
                        </button>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 align-items-center p-0"> <div className="account-form-wrap p-5">
                                <div className="login-form">
                                    <div className="content">
                                        <h4 className="title mb-5">{ title }</h4>
                                    </div>
                                    { children }
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvas-overlay"> </div>
            </aside>
        </div>
    );
};
