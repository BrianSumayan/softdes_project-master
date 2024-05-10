import React, { useState } from "react";
import axios from "axios";
import CarDiagram from "./components/CarDiagram";
import StatusIndicators from "./components/StatusIndicators";
import RecommendationModal from "./components/RecommendationModal";
import "./App.css"; // Make sure this import points to where you define the button styles
import carImage from "./assets/car.png";

function App() {
  const [engineStatus, setEngineStatus] = useState({
    alternator: "good",
    waterPump: "good",
    tensionerBearing: "good",
    belt: "good",
    radiatorFanMotor: "good",
  });
  const [isScanning, setIsScanning] = useState(false);
  const [detectionMessage, setDetectionMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [currentFault, setCurrentFault] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFileValid, setIsFileValid] = useState(false);

  const handleStartScan = async () => {
    if (!isFileValid) return; // Prevent scan if no valid file is selected

    setIsScanning(true);
    setEngineStatus({
      alternator: "good",
      waterPump: "good",
      tensionerBearing: "good",
      belt: "good",
      radiatorFanMotor: "good",
    });
    setDetectionMessage('');
    setShowModal(false);
    setCurrentFault('');
    try {
      const response = await axios.get("http://192.168.1.15:5000/api/start-scan");
      if (response.data.message === "Anomaly Detected!") {
        setDetectionMessage(response.data.message);
        const faultKey = Object.keys(response.data.faults).find(key => response.data.faults[key] === "warning");
        setCurrentFault(faultKey);
        setEngineStatus(response.data.faults);
        setShowModal(true);
      } else {
        setDetectionMessage(response.data.message);
      }
    } catch (error) {
      console.error("There was an error processing the scan", error);
      setDetectionMessage('Error processing scan, please try again.');
    }
    setIsScanning(false);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setSelectedFile(file);
      setIsFileValid(true);
    } else {
      setSelectedFile(null);
      setIsFileValid(false);
      alert('Please select a valid audio file.');
    }
  };

  return (
    <div className="App">
      <div className="headerContainer">
        <img src={carImage} className="img-logo" alt="Car Diagram" />
        <div className="header">TEAM 4</div>
      </div>
      <div className="app-container">
        <div className="main-content">
          <CarDiagram isScanning={isScanning} />
          <div className="status-and-recommendation">
            <StatusIndicators status={engineStatus} />
            <div className="recommendation-panel">
              <h2>SCAN RESULT</h2>
              <p>{detectionMessage}</p>
              <button className="button start-button" onClick={handleStartScan} disabled={!isFileValid || isScanning}>
                {isScanning ? "SCANNING..." : "START SCAN"}
              </button>
              <div className="file-upload-container">
                <label htmlFor="file-input" className="file-input-label">
                  Input Sound File      
                </label>
                <input id="file-input" type="file" onChange={handleFileSelect} className="file-input" />
                <button className="file-input-button" onClick={() => document.getElementById('file-input').click()}>
                  Choose from the file
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && currentFault && (
        <RecommendationModal isOpen={showModal} fault={currentFault} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

export default App;
