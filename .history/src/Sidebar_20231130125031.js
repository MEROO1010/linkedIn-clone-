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
    </div>
  )
}

export default Sidebar