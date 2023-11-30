import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="https://icons8.com/icon/xuvGCOXi8Wyg/linkedin" alt="" />

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
