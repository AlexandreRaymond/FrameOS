import React from "react";
import "./CSS/Plugins.css";
import { BsFillUsbDriveFill } from "react-icons/bs";

const Plugins = () => {
  return (
    <>
      <div className="plugins-dropdown">
        <button className="plugins">
          <BsFillUsbDriveFill />
        </button>
        <div className="plugins-dropdown-menu">USB?</div>
      </div>
    </>
  );
};

export default Plugins;
