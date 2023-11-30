import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="" />

        <div className="header__search">
          <SearchIcon /> 
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
};

export default Header;
