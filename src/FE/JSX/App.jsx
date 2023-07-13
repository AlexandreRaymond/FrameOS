import React from "react";
import "./CSS/App.css";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="desktop-app">
          <Desktop />
        </div>
        <div className="taskbar-app">
          <Taskbar />
        </div>
      </div>
    </>
  );
};

export default App;
