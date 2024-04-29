// src/components/CarDiagram.js
import React from "react";
import "../styles/CarDiagram.css"; // Correct the path to point to the styles directory
import carImage from "../assets/car.png"; // This assumes you have car-diagram.png in the assets directory
import carBorder from "../assets/carBorder.png"; // This assumes you have car-diagram.png in the assets directory

const CarDiagram = ({ isScanning }) => {
  return (
    <div className="car-diagram-container">
      <div className={`car-diagram ${isScanning ? "scanning" : ""}`}>
        <img src={carBorder} className="car-border" alt="Car Diagram" />
        <img src={carImage} alt="Car Diagram" />
      </div>
    </div>
  );
};

export default CarDiagram;
