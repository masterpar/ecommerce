
export const BasicModal = ({show, setShow, title, children, ...rest}) => {

    const onClose = () => {
        setShow(false)
    }
    return (
        <>
            {show &&
            (
                <>
                <div className="modal fade right theme1 style1 show" id="quick-view" tabIndex="-1"
                     style={{paddingRight: '15px', display: 'block'}} >
                    <div className="modal-dialog modal-dialog-centered" >
                        <div className="modal-content">
                            <div className="modal-header" onClick={onClose} >
                                <button type="button" className="close" >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="title text-capitalize text-center mb-10 pb-25"> Log in to your account</h3>
                                       {children}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-backdrop fade show"> </div>
                    </>
                )
            }
        </>
    );
};
