import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
 <div className="header__left">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"
              alt=""
            />

            <div className="header_search">
                <SearchIcon />
                <input type="text"/>
            </div>
        </div>

        <div className="header__right">
              <HeaderOption Icon={HomeIcon} title='Home' />
              <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
              <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
              <HeaderOption Icon={ChatIcon} title='Messaging'/>
              <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
              <HeaderOption avatar="https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png" title = "me"/>
        </div>
    </div>
  )
}

export default Header;
