import Link from "next/link";
import useAuth from "../../../hooks/useAuth";
import {OptionsUser} from "./OptionsUser";


export const Menu = ({user}) => {

    return (
        <div className="header-middle pt-20">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6 col-lg-2 order-first">
                        <div className="logo text-center text-sm-left mb-30 mb-sm-0">
                            <Link href="/"><img src="assets/img/logo/logo-dark.jpg" alt="logo"/></Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-5 col-xl-4">

                        {/*options user*/}
                    <OptionsUser user={user}/>


                    </div>
                    <div className="col-lg-5 col-xl-6 order-lg-first">
                        <div className="search-form pt-30 pt-lg-0">
                            <form className="form-inline position-relative">
                                <input className="form-control theme1-border" type="search"
                                       placeholder="Enter your search key ..."/>
                                <button className="btn search-btn theme-bg btn-rounded" type="submit">
                                    <i className="icon-magnifier"> </i> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

//
// const ListCategories = () =>{
//     return (
//                 <ul className="breadcrumb">
//                     <li className="mx-2"><Link href="/Dragón Ball">Dragon</Link></li>
//                     <li className="mx-2"><Link href="/Naruto">Naruto</Link></li>
//                     <li className="mx-2"><Link href="/Bleach">Bleach</Link></li>
//                     <li className="mx-2"><Link href="/Caballeros">Caballeros</Link></li>
//                 </ul>
// //             <Link href='/play-station'>
// //                     <MenuWeb.Item as='a'>
// //                         Playstation
// //                     </MenuWeb.Item>
// //             </Link>
//     )
// }


