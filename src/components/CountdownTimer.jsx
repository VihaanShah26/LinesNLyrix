import React from "react";
import "../styles/CountdownTimer.css";

const CountdownTimer = ({ totalTime, currentTime }) => {
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: { color: "green" },
    warning: { color: "orange", threshold: WARNING_THRESHOLD },
    alert: { color: "red", threshold: ALERT_THRESHOLD }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const calculateCircleDasharray = (remainingTime) => {
    const timeFraction = remainingTime / totalTime;
    return `${(timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
  };

  const remainingPathColor = (remainingTime) => {
    if (remainingTime <= totalTime * (1 - ALERT_THRESHOLD / 100)) {
      return COLOR_CODES.alert.color;
    } else if (remainingTime <= totalTime * (1 - WARNING_THRESHOLD / 100)) {
      return COLOR_CODES.warning.color;
    } else {
      return COLOR_CODES.info.color;
    }
  };

  return (
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
          <path
            id="base-timer-path-remaining"
            strokeDasharray={calculateCircleDasharray(currentTime)}
            className={`base-timer__path-remaining ${remainingPathColor(currentTime)}`}
            d="M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0"
          ></path>
        </g>
      </svg>
      <span id="base-timer-label" className="base-timer__label">{formatTime(currentTime)}</span>
    </div>
  );
};

export default CountdownTimer;
