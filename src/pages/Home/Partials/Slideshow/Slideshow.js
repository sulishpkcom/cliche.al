import React from 'react';
import './Slideshow.css';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  color: '#fff',
  fontSize: '50px',
  fontHeight: 'light',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#f3caca',
  height: '500px',
  FontFace: 'Quicksand'

};
const Slideshow = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>Cliche Albania Image</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};
export default Slideshow;