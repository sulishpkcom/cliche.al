import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import TopHeader from "./TopHeader"
import {CiSearch, CiUser, CiShoppingCart, CiHeart, CiHeadphones, CiMapPin} from "react-icons/ci";
import StoreLogo from "../../assets/images/Logo-Color-svg.webp";
const Header = () => {
    return(
        <div className="full-header-wrapper">
        <TopHeader />
            <div className="header-wrapper">
                <div className="search-container">
                    <div className="search-container-inner">
                        <input className="search-input" type="text" placeholder="Search..." />
                        <CiSearch />
                    </div>
                </div>
                <div className="logo-container">
                    <a href="/"><img className="primary-logo" src={StoreLogo} width="200px"/></a>
                </div>
                <div className="customer-header-links">
                    <div className="my-account-container">
                    <CiUser />
                    </div>
                    <div className="my-wishlist-container">
                    <CiHeart />
                    <span className="items-counter-wishlist">0</span>
                    </div>
                    <div className="my-shopping-cart-container">
                    <CiShoppingCart />
                    <span className="items-counter-cart">0</span>
                    </div>
                </div>
            </div>
            <div className="devider-custom-full-width" />
           <div className="below-header">
            <div className="browse-categories">
                    <span className="text">Browser Categories <IoIosArrowDown /></span>
                </div>
                <div className="navbar-wrapper">
                    <ul className="navbar menu-items">
                        <li className="menu-item"><a href="/" className="menu-item">Home</a></li>
                        <li className="menu-item"><a href="/" className="menu-item">Shop<IoIosArrowDown /></a></li>
                        <li className="menu-item"><a href="/about" className="menu-item">About Us</a></li>
                        <li className="menu-item"><a href="/contact" className="menu-item">Contact Us</a></li>
                    </ul>
                </div>
                <div className="additional-links">
                    <span className="text"><CiHeadphones />+(123) 4567 890</span>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;