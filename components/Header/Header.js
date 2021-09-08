import React from 'react';
import {Topbar} from "./TopBar/Topbar";
import {Menu} from "./Menu/Menu";

export const Header = () => {
    return (
        <div className="header">
            <Topbar />
            <Menu />
        </div>
    );
};
