import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import ava02 from '../../../assets/images/ava-2.jpg';
import ava03 from '../../../assets/images/ava-3.jpg';
import ava04 from '../../../assets/images/ava-4.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          I've been using [Your Food Delivery App] for a few months now, and it never disappoints. The selection of restaurants is fantastic, and the food always arrives hot and fresh. I love the real-time tracking and the easy-to-use interface. Highly recommend!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Rishab Thakur</h6>
        </div>
      </div>
      <div>
        <p className='review__text'>
          I've been using RideCulicious for a few months now, and it never disappoints. The selection of restaurants is fantastic, and the food always arrives hot and fresh. I love the real-time tracking and the easy-to-use interface. Highly recommend!"
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Sodhi</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
