import React from "react";
import "./CSS/InternetConnection.css";
import { TbNetwork, TbNetworkOff, TbWifi, TbWifiOff } from "react-icons/tb";

const InternetConnection = () => {
  return (
    <>
      <div className="web-connection-dropdown">
        <button className="web-connection">
          <TbNetwork />
        </button>
        <div className="web-connection-dropdown-menu">Wifi?</div>
      </div>
    </>
  );
};

export default InternetConnection;
