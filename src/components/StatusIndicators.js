// src/components/StatusIndicators.js
import React from "react";
import "../styles/StatusIndicators.css";

const StatusIndicators = ({ status }) => {
  return (
    <div className="status-indicators">
      <div className="status-header">
        <div className="status-header-item">
          <div className="status-light good"></div>Good
        </div>
        <div className="status-header-item">
          <div className="status-light warning"></div>Warning
        </div>
      </div>
      {Object.keys(status).map((key) => (
        <div key={key} className="status-indicator">
          <div className={`status-light ${status[key]}`}></div>
          {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
          {/* Capitalize the first letter */}
        </div>
      ))}
    </div>
  );
};

export default StatusIndicators;
