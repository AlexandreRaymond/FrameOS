import React from "react";
import "./CSS/Settings.css";
import Audio from "./Audio";
import Language from "./Language";
import InternetConnection from "./InternetConnection";
import Plugins from "./Plugins";

const Settings = () => {
  return (
    <>
      <div className="taskbar-settings">
        <Plugins />
        <InternetConnection />
        <Audio />
        <Language />
      </div>
    </>
  );
};

export default Settings;
