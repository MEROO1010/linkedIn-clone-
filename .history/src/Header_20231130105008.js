import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />

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
