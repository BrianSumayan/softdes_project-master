// src/App.js
import React, { useState } from "react";
import axios from "axios";
import CarDiagram from "./components/CarDiagram"; // Make sure this component is set up properly
import StatusIndicators from "./components/StatusIndicators"; // New component for status indicators
import "./App.css"; // Update your styles accordingly
import carImage from "./assets/car.png";
import Form from "./components/Form";
axios.defaults.withCredentials = true;
function App() {
  const [engineStatus, setEngineStatus] = useState({
    alternator: "warning",
    waterPump: "good",
    tensionerBearing: "good",
    belt: "good",
    radiatorFanMotor: "good",
  });
  const [isScanning, setIsScanning] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleStartScan = async () => {
    setIsScanning(true);
    // You should replace the below URL with the endpoint of your API that initiates the scanning
    try {
      const response = await axios.get("http://localhost:5000/api/start-scan");
      setAnalysisResult(response.data);
      updateEngineStatus(response.data.anomalies);
    } catch (error) {
      console.error("There was an error processing the scan", error);
      // Handle error appropriately
    }
    setIsScanning(false);
  };

  // This function would update the engine status based on the analysis results
  const updateEngineStatus = (anomalies) => {
    // Implement logic based on the structure of your anomalies data
    // For example:
    const newStatus = { ...engineStatus };
    anomalies.forEach((anomaly) => {
      newStatus[anomaly.part] = anomaly.status;
    });
    setEngineStatus(newStatus);
  };

  return (
    <div className="App">
      <div className="headerContainer">
        <img src={carImage} className="img-logo" alt="Car Diagram" />
        <div className="header">TEAM 4</div>
      </div>
      <div>
        <Form />
      </div>
      <div className="app-container">
        <div className="main-content">
          <CarDiagram isScanning={isScanning} />
          <div className="status-and-recommendation">
            <StatusIndicators status={engineStatus} />
            {analysisResult && (
              <div className="recommendation-panel">
                <h2>RECOMMENDATION</h2>
                {/* Render recommendation based on the analysisResult */}
                <p>{analysisResult.recommendation}</p>
              </div>
            )}
            <button
              className="start-button"
              onClick={handleStartScan}
              disabled={isScanning}
            >
              {isScanning ? "SCANNING" : "START"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
