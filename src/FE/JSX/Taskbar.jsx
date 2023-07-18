import React from "react";
import "./CSS/Taskbar.css";
import { BsFillDoorClosedFill, BsSearch } from "react-icons/bs";
import Start from "./Start";
import Search from "./Search";
import TabsIcons from "../TabsIcons";
import MiscTask from "./MiscTask";

const Taskbar = () => {
  return (
    <>
      <div className="taskbar">
        <div className="taskbar-start">
          <Start />
        </div>
        <div className="taskbar-search">
          <Search />
        </div>
        <div className="taskbar-icons">
          <TabsIcons />
        </div>
        <MiscTask />
      </div>
    </>
  );
};

export default Taskbar;
