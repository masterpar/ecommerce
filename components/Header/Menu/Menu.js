import {Menu as MenuWeb,Icon} from "semantic-ui-react";
import Link from "next/link";
import {MenuPages} from "./MenuPages/MenuPages";
import {MenuUserOptions} from "./MenuUserOptions";


export const Menu = () => {
    return (
        <header className="header-area sticky-header header-default" >
            <div className="container" style={{ height: '80px'}}>
                <div className="row align-items-center">
                    <div className="col-4 col-sm-4 col-lg-3">
                        <MenuLogo />
                    </div>

                    {/*User Pages*/}
                    <div className="col-sm-4 col-lg-7 d-none d-sm-block ">
                          <MenuPages/>
                    </div>

                    {/*User options*/}
                    <div className="col-sm-7 col-lg-2 d-none d-lg-block text-end">
                         <MenuUserOptions />
                    </div>

                    <div className="col-6 col-sm-1 d-block d-lg-none text-end">
                        <button className="btn-menu" type="button"><i className="zmdi zmdi-menu"> </i></button>
                    </div>

                </div>
            </div>

            {/*list categories*/}
            <div className="page-header-area p-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-header-content">
                                <nav className="breadcrumb-area">

                                    <ListCategories/>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};


const MenuLogo =  () => {
    return (
        <div className="header-logo-area">
            <a href="/">
                <img className="logo-main" src="/img/logo.png" alt="Logo" />
                <img className="logo d-none" src="img/logo-light.png" alt="Logo" />
            </a>
        </div>
    )
}

const ListCategories = () =>{
    return (
                <ul className="breadcrumb">
                    <li className="mx-2"><Link href="/Dragón Ball">Dragon</Link></li>
                    <li className="mx-2"><Link href="/Naruto">Naruto</Link></li>
                    <li className="mx-2"><Link href="/Bleach">Bleach</Link></li>
                    <li className="mx-2"><Link href="/Caballeros">Caballeros</Link></li>
                </ul>
//             <Link href='/play-station'>
//                     <MenuWeb.Item as='a'>
//                         Playstation
//                     </MenuWeb.Item>
//             </Link>
    )
}


