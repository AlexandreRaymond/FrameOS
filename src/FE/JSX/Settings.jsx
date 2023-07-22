import React from "react";
import "./CSS/Settings.css";
import Audio from "./Audio";
import Language from "./Language";
import InternetConnection from "./InternetConnection";
import Plugins from "./Plugins";
import Weather from "./Weather";

const Settings = () => {
  return (
    <>
      <div className="taskbar-settings">
        <Weather />
        <Plugins />
        <InternetConnection />
        <Audio />
        <Language />
      </div>
    </>
  );
};

export default Settings;
