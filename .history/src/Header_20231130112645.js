import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';



const Header = () => {
  return (
    <div className="header">
      

      <div className="header__left">
        <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
         alt="" />

        <div className="header__search">
          <SearchIcon /> 
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>

        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
    </div>
  );
};

export default Header;
