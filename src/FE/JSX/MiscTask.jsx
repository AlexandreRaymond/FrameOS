import React from "react";
import Tabdown from "./Tabdown";
import Settings from "./Settings";
import Clock from "./Clock";
import Newsmail from "./Newsmail";

const MiscTask = () => {
  return (
    <>
      <Settings />
      <Clock />
      <Newsmail />
      <Tabdown />
    </>
  );
};

export default MiscTask;
