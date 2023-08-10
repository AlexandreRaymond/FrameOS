import { useState, useEffect } from "react";
import "./CSS/Clock.css";

const Clock = () => {
  const [time, setTime] = useState("");
  const [bigTime, setBigTime] = useState("");
  const [date, setDate] = useState("");

  const formatTime = (val) => {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  };

  const formatDay = (val) => {
    if (val < 10) {
      return "0";
    } else {
      return val;
    }
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    const day = d.getUTCDay();
    const month = d.getMonth();
    const year = d.getFullYear();

    setDate(
      // formatDay(day) +
      d.getUTCDate() + "/" + formatDay(month) + (month + 1) + "/" + year
    );

    setTime(formatTime(h) + h + ":" + formatTime(m) + m);

    setBigTime(
      formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s
    );
  };

  return (
    <>
      <div className="clock-dropdown">
        <button className="clock">
          <div>{time}</div>
          <div>{date}</div>
        </button>
        <div className="clock-dropdown-menu">Clock Content</div>
      </div>
    </>
  );
};

export default Clock;
