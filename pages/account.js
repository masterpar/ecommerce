import React, {useState, useEffect} from 'react';
import {BasicLayout} from "../layouts/BasicLayout/BasicLayout";
import { useRouter} from "next/router";
import useAuth from "../hooks/useAuth";
import {getMeApi} from "../api/user";
import {ChangeNameForm} from "../components/Account/ChangeNameForm/ChangeNameForm";

const Account = () => {

    //Todo state
    const [user, setUser] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState('Configuration');
    const {auth, logout,setReloadUser} = useAuth()

    //Todo router
    const router = useRouter()

    useEffect(() => {
        (async() => {
            const response = await getMeApi(logout)
            setUser( response || null)
        })()
    }, [auth]);

    //verificando usuario
    if(user === undefined) return null

    //validando sesión
    if(!auth && !user){
        router.replace('/');
        return null
    }


    return (
        <BasicLayout>
            <div className="row mt-5 justify-content-center">
                <div className="col-10">
                    <div className="product-review-tabs-content">
                        <ul className="nav product-tab-nav" id="ReviewTab" role="tablist">

                            <li role="presentation">
                                <a className={`${activeMenu === 'Configuration' && 'active' }`} id="description-tab"
                                   onClick={ () => setActiveMenu('Configuration') }  href="#"
                                   >Configuration</a>
                            </li>
                            <li role="presentation">
                                <a id="reviews-tab" className={`${activeMenu === 'review' && 'active' }`}
                                   onClick={() => setActiveMenu('review') } href="#"
                                   >Reviews</a>
                            </li>
                        </ul>

                        {/*#Todo Configuración Usuario*/}
                        <div className="tab-content product-tab-content" >
                            <div className={activeMenu ==='Configuration' ? "tab-pane fade active show" : "tab-pane fade" } >
                                <ChangeNameForm user={user} logout={logout} setReloadUser={setReloadUser}/>
                            </div>

                            <div className={activeMenu ==='review' ? "tab-pane fade active show" : "tab-pane fade" }
                                 id="reviews" >
                                <div className="product-review-content">
                                    <div className="review-content-header">
                                        <h3>Customer Reviews</h3>
                                        <div className="review-info">
                                            <ul className="review-rating">
                                                <li className="fa fa-star"> </li>
                                                <li className="fa fa-star"> </li>
                                                <li className="fa fa-star"> </li>
                                                <li className="fa fa-star"> </li>
                                                <li className="fa fa-star-o"> </li>
                                            </ul>
                                            <span className="review-caption">Based on 7 reviews</span>
                                            <span className="review-write-btn show">Write a review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </BasicLayout>
    );
};




export default Account
