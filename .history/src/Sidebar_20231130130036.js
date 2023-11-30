import { Avatar } from "@material-ui/core";
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt=""/>
        <Avatar calssName="sidebar__avatar"/>
        <h2>Arwa Alsaggaf</h2>
        <h4>arwa468saggaf@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
        <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar