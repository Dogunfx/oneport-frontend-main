import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logo from "../../assests/OnePort365-logo.png";
import { SidebarMenu } from "../../MenuList";
import { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar-menu">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="sidebarListItems">
        <ul className="sidebar-items">
          {SidebarMenu.map((items, index) => {
            return (
              <li key={index} className="menuList">
                <Link
                  to={items.links}
                  className={
                    selected === index ? "menuLink active" : "menuLink"
                  }
                  onClick={() => setSelected(index)}
                >
                  <div
                    className={
                      selected === index
                        ? "sidebar-icons active"
                        : "sidebar-icons"
                    }
                  >
                    {items.icon}
                  </div>
                  <div className="sidebarTitle">{items.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
