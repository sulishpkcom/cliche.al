import React from "react";
import './BannersCarousel.css';
import Banner1 from '../../../../assets/images/Banner-4-x2.png';
import Banner2 from '../../../../assets/images/Banner-5-x2.png';
import Banner3 from '../../../../assets/images/Banner-4-x2.png';
import { Carousel, Button } from 'antd';

const bannerData = [
  {
    title: 'Banner 1',
    imageSrc: Banner1,
    buttonLink: '#',
    buttonText: 'View Collection',
  },
  {
    title: 'Banner 2',
    imageSrc: Banner2,
    buttonLink: '#',
    buttonText: 'View Collection',
  },
  {
    title: 'Banner 3',
    imageSrc: Banner3,
    buttonLink: '#',
    buttonText: 'View Collection',
  },
];

const BannersCarousel = () => {
  return (
    <div className="banners-wrapper">
        <div className="banners-for-desktop">
        <Carousel autoplay dots={false} slidesToShow={3} slidesToScroll={1}>
            {bannerData.map((banner, index) => (
                <div key={index}>
                <div  className="banner-item" style={{ ...generalStyle, backgroundImage: `url(${banner.imageSrc})` }}>
                <a href={banner.buttonLink}>
                    <h3 className="banner-title">{banner.title}</h3>
                </a>
                <Button type="primary" href={banner.buttonLink} className="banner-button">View Collection</Button>
                </div>
                </div>
            ))}
        </Carousel>
        </div>
        <div className="banners-for-tablet">
        <Carousel autoplay dots={false} slidesToShow={2} slidesToScroll={1}>
            {bannerData.map((banner, index) => (
                <div key={index}>
                <div  className="banner-item" style={{ ...generalStyle, backgroundImage: `url(${banner.imageSrc})` }}>
                <a href={banner.buttonLink}>
                    <h3 className="banner-title">{banner.title}</h3>
                </a>
                <Button type="primary" href={banner.buttonLink} className="banner-button">View Collection</Button>
                </div>
                </div>
            ))}
        </Carousel>
        </div>
        <div className="banners-for-mobile">
        <Carousel autoplay dots={false} slidesToShow={1} slidesToScroll={1}>
            {bannerData.map((banner, index) => (
                <div key={index}>
                <div  className="banner-item" style={{ ...generalStyle, backgroundImage: `url(${banner.imageSrc})` }}>
                <a href={banner.buttonLink}>
                    <h3 className="banner-title">{banner.title}</h3>
                </a>
                <Button type="primary" href={banner.buttonLink} className="banner-button">View Collection</Button>
                </div>
                </div>
            ))}
        </Carousel>
        </div>
    </div>
  );
};

const generalStyle = {
  margin: '0px 20px',
  color: '#fff',
  fontSize: '24px',
  textAlign: 'left',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '20px',
  width: '85%'
};

export default BannersCarousel;