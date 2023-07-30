import React from "react";
import "./CSS/Start.css";
import { BsFillDoorClosedFill } from "react-icons/bs";

const Start = () => {
  return (
    <>
      <div className="start-dropdown">
        <button className="start">
          <BsFillDoorClosedFill />
        </button>
        <div className="start-dropdown-menu">Start Content</div>
      </div>
    </>
  );
};

export default Start;
