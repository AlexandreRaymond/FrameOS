import React from "react";
import "./CSS/InternetConnection.css";
import { TbNetwork, TbNetworkOff, TbWifi, TbWifiOff } from "react-icons/tb";

const InternetConnection = () => {
  return (
    <>
      <div className="taskbar-internet-connection">
        <TbNetwork />
      </div>
    </>
  );
};

export default InternetConnection;
