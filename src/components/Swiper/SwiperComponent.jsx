import React, { useEffect } from 'react';
import Swiper from 'swiper';
import '../../assets/css/swiper.css'; 

const SwiperComponent = () => {
  useEffect(() => {
    const mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      mySwiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container overflow-hidden">
      <div className="swiper-wrapper gap-4">
        <div className="swiper-slide"><img src="https://placekitten.com/600/400" alt="Slide 1" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/402" alt="Slide 2" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/403" alt="Slide 3" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/404" alt="Slide 4" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/405" alt="Slide 5" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/406" alt="Slide 6" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/407" alt="Slide 7" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/408" alt="Slide 8" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/409" alt="Slide 9" /></div>
        <div className="swiper-slide"><img src="https://placekitten.com/600/410" alt="Slide 10" /></div>
      </div>

      <div className="swiper-button-next text-white bg-blue-500 rounded p-2 hover:bg-blue-700"></div>
      <div className="swiper-button-prev text-white bg-blue-500 rounded p-2 hover:bg-blue-700"></div>
    </div>
  );
};

export default SwiperComponent;
