import React from "react";
import Slideshow from "./Partials/Slideshow/Slideshow";
import BannersCarousel from "./Partials/BannersCarousel/BannersCarousel";

const Home = () => {
    return(
        <div className="home-page">
            <Slideshow />
            <BannersCarousel />
        </div>
    );
}

export default Home;