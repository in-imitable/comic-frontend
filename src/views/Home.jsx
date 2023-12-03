import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
// import ImageSlider from "../components/ImageSlider/ImageSlider";
// import Swiper from "../components/Swiper/SwiperComponent";

const Home = () => {
  return (
    <>
      <div className="my-app">
        <div className="page-container flex body-back overflow-hidden">
          <Sidebar />
          <div className="right-container w-full">
            <Header />
            {/* <div className="main-container"> */}
            {/* <ImageSlider /> */}
            {/* <Swiper/> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
