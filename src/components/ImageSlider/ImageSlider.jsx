import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    customPaging: function (i) {
      return <a>{/* Your thumbnail image here */}</a>;
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="https://placekitten.com/800/400" alt="Slide 1" />
        </div>
        <div>
          <img src="https://placekitten.com/800/401" alt="Slide 2" />
        </div>
        <div>
          <img src="https://placekitten.com/800/402" alt="Slide 3" />
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default ImageSlider;
