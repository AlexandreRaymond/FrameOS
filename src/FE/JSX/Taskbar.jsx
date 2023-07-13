import React from "react";
import "./CSS/Taskbar.css";
import { BsFillDoorClosedFill, BsSearch } from "react-icons/bs";
import Start from "./Start";
import Search from "./Search";

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
          <div className="icon-spot">1</div>
          <div className="icon-spot">2</div>
          <div className="icon-spot">3</div>
          <div className="icon-spot">4</div>
          <div className="icon-spot">5</div>
          <div className="icon-spot">6</div>
          <div className="icon-spot">7</div>
          <div className="icon-spot">8</div>
          <div className="icon-spot">9</div>
          <div className="icon-spot">10</div>
        </div>
        <div className="taskbar-open-tabs">open tabs</div>
        <div className="taskbar-settings">settings</div>
        <div className="taskbar-time">time</div>
        <div className="taskbar-tab-down">tabdown</div>
      </div>
    </>
  );
};

export default Taskbar;
