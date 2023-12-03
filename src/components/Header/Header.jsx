import React, { useEffect, useState } from "react";
import "./Header.css";

import bg1 from '/public/assets/bg/bg1.jpg';
import bg2 from '/public/assets/bg/bg2.jpg';
import img1 from '/public/assets/bg/image1.jpg';

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="header-background">
        <div
          className="background-slider"
          style={{ 
            background: `url(${bg1}) center/cover`,
            transition: "transform 0.5s ease-in-out",
            transform: `translateY(-${scrollPosition}px)` 
          }}
        >
          <div className="backgroundShadowBottom"></div>
          <div className="backgroundShadowLeft"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
