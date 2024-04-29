// components/StartButton.js
import React from "react";
import "../styles/StartButton.css";

const StartButton = ({ onStart }) => {
  return (
    <button className="start-button" onClick={onStart}>
      START
    </button>
  );
};

export default StartButton;
