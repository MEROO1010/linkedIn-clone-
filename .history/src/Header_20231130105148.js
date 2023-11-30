import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';



const Header = () => {
  return (
    <div className="header">
      <h1>This is the header</h1>

      <div className="header__left">
        <img src="https://www.flaticon.com/free-icon/linkedin_3536505?term=linkedin&page=1&position=1&origin=search&related_id=3536505" alt="" />

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
