import React from "react";
import './Header.css';
import HamburgerMenu from "./Partials/HamburgerMenu";
import CategoriesDrawer from './Partials/CategoriesDrawer';
import StoreLogo from "../../assets/images/Logo-Color-svg.webp";

const MobileHeader = ()  => {
    return (
        <div className="mobile-header-wrapper">
            <div className="top-header-mobile">
                <select className="language-switcher">
                    <option>Albanian</option>
                    <option>English</option>
                </select>
                <select className="currency-switcher">
                    <option>EUR</option>
                    <option>ALL</option>
                </select>
            </div>
            <div className="middle-header">
                <div className="HamburgerMenu">
                    <HamburgerMenu />
                </div>
                <div className="LogoContainer">
                <img src={StoreLogo} width={'70px'}/>
                </div>
                <div className="CategoriesContainer">
                    <CategoriesDrawer />
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;