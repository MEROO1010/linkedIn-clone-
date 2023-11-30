import { Avatar } from "@material-ui/core";
import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
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

      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  )
}

export default Sidebar