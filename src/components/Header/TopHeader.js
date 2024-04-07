import React from "react";
import "./Header.css"
const TopHeader = () => {
    return(
        <div className="top-header container">
            <div className="top-header-inner">
                <div className="top-left-menu-container">
                    <select className="language-switcher">
                        <option>Albanian</option>
                        <option>English</option>
                    </select>
                    <select className="currency-switcher">
                        <option>EUR</option>
                        <option>ALL</option>
                    </select>
                    <span className="cta-text">Discounts on Summer Sale! Shop Now!</span>
                </div>
                <div className="top-right-menu-container">
                    <ul className="top-right-links">
                        <li className="link-item"><a href="/">Store Location</a></li>
                        <li className="link-item"><a href="/">Store Location</a></li>
                        <li className="link-item"><a href="/">Store Location</a></li>
                        <li className="link-item"><a href="/">Store Location</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TopHeader;