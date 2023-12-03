import React, { useState } from "react";
import logo from "../../assets/book.svg";
import { HomeIcon, SearchIcon, ProfileIcon, HeadphoneIcon, LibraryIcon } from "./NavIcon";
import "./Sidebar.css";
import NavItem from "./NavItem";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { icon: <HomeIcon />, title: "Home" },
    { icon: <SearchIcon />, title: "Search" },
    { icon: <LibraryIcon />, title: "Library" },
    { icon: <HeadphoneIcon />, title: "Audiobook" },
    { icon: <ProfileIcon />, title: "Profile" },
  ];

  const handleItemHover = (title) => {
    if (!isHovered) {
      setActiveItem(title);
    }
  };

  const handleItemClick = (title) => {
    setActiveItem(title);
  };

  return (
    <div className="left-container">
    <div className="sidebar w-24">
        <div className="left-logo justify-center items-center max-w-full py-5">
          <img src={logo} className="w-10 z-50" alt="Logo" />
        </div>
        <div className="left-nav">
          <div
            className="backdropWidth"
            style={{
              display: isHovered ? "block" : "none",
              background: "linear-gradient(90deg, rgba(15, 16, 20, .95) 16.24%, rgba(15, 16, 20, 0) 98.46%)",
              width: "75vw",
            }}
          ></div>
          <aside className="sideNav items-center absolute flex max-w-64 z-5">
            <nav``
              className="navbar flex flex-col py-10"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {navItems.map((item, index) => (
                <NavItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  isActive={activeItem === item.title}
                  onMouseEnter={() => handleItemHover(item.title)}
                  onClick={handleItemClick}
                />
              ))}
            </nav>
          </aside>
        </div>
      </div>
      </div>
  );
};

export default Sidebar;
