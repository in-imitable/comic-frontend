import React, { useState } from "react";

const NavItem = ({ icon, title, isActive, onMouseEnter, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`nav-icons-block ${isActive ? "active" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(title)}
    >
      <div className={`outline ${isActive ? "active-outline" : ""}`}>
        <div
          className={`outline icon-container`}
        >
          <span
            className={`nav-icon ${isHovered || isActive ? "glow-icon" : ""} pop-up-icon`}
            style={{ color: (isHovered || isActive) && "white" }}
          >
            {icon}
          </span>
          <span
            className={`nav-title ${isHovered || isActive ? "glow-title" : ""} ml-2 py-3`}
            style={{ color: (isHovered || isActive) && "white" }}
          >
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavItem;
