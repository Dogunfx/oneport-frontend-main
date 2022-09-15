import React from "react";

import "./Header.css";
import TemocLogo from "../../assests/Rectangle 184.png";
import notifyLogo from "../../assests/Group 92.png";
import { BsChevronDown } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";

const Header = ({ title }) => {
  return (
    <div className="Header">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="notify">
        <MdOutlineNotificationsNone className="notifyIcon" />
        <img src={notifyLogo} alt="" className="notifyLogo" />
        <div className="notify-logo">
          <img src={TemocLogo} alt="" className="temocImg" />
          <div className="notifyTxt">
            <h3>Temoc</h3>
            <BsChevronDown fontSize={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
