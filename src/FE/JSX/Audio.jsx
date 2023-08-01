import React from "react";
import "./CSS/Audio.css";
import { AiFillSound } from "react-icons/ai";

const Audio = () => {
  return (
    <>
      <div className="audio-dropdown">
        <button className="audio">
          <AiFillSound />
        </button>
        <div className="audio-dropdown-menu">Sounds</div>
      </div>
    </>
  );
};

export default Audio;
