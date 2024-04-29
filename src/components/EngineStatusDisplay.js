// components/EngineStatusDisplay.js
import React from "react";
import "../styles/EngineStatusDisplay.css";

const EngineStatusDisplay = ({ status }) => {
  const statusEntries = status ? Object.entries(status) : [];

  return (
    <div className="status-display">
      {statusEntries.map(([part, partStatus]) => (
        <div key={part} className={`status-item ${partStatus}`}>
          <span className="part-name">{part}:</span>
          <span className="part-status">{partStatus}</span>
        </div>
      ))}
    </div>
  );
};

export default EngineStatusDisplay;
