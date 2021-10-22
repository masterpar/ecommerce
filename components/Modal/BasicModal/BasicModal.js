import { useState } from 'react';

export const BasicModal = ({show, setShow, title, children, ...rest}) => {

    const onClose = () => {
        setShow(false)
    }
    return (
        <div>
            <aside className={ !show ? 'product-quick-view-modal' : 'product-quick-view-modal active'} >
                <div className="product-quick-view-inner">
                    <div className="product-quick-view-content" style={{ backgroundColor: '#fff0', padding: '0', margin:'auto', maxWidth:'700px'}}>
                        <button type="button" className="btn-close" style={{ margin:'50px 0px'}} onClick={onClose}>
                            <span className="close-icon"><i className="fa fa-close"> </i></span>
                        </button>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 align-items-center p-0">
                                <div className="content text-center">
                                    { children }
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
