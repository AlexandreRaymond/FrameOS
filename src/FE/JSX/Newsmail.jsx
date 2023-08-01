import React from "react";
import "./CSS/Newsmail.css";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";

const Newsmail = () => {
  return (
    <>
      <div className="newsmail-dropdown">
        <button className=" newsmail">
          <HiChatBubbleBottomCenterText />
        </button>
        <div className="newsmail-dropdown-menu">News on your PC</div>
      </div>
    </>
  );
};

export default Newsmail;
