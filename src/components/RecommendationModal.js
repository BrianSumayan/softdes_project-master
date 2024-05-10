import React from 'react';
import "../styles/Modal.css"; // Make sure the path to your CSS file is correct

function RecommendationModal({ isOpen, fault, onClose }) {
  if (!isOpen || !fault) return null;

  const recommendations = {
    Alternator: "Check the alternator belt for wear and tension. Ensure the connections are tight and corrosion-free. Consider testing the alternator output with a multimeter and replace if necessary.",
    WaterPump: "Inspect the water pump for leaks or unusual noises. Check the coolant level and the condition of the radiator hose. Replace the water pump if it is malfunctioning to prevent engine overheating.",
    TensionerBearing: "Listen for unusual noises from the belt area, indicating a possible tensioner issue. Inspect the tensioner assembly for wear and replace if the tensioner bearing is not functioning smoothly.",
    Belt: "Examine all engine belts for cracks, fraying, or signs of excessive wear. Replace any damaged belts promptly to avoid further engine complications.",
    RadiatorFanMotor: "Ensure the radiator fan activates when the engine reaches operating temperature. Check for damaged fan blades and test the motor's electrical connections. Replace the fan motor if it fails to operate correctly."
  };

  const recommendationText = recommendations[fault] || "No specific recommendation available.";

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{fault} Fault</h2>
        <p>{recommendationText}</p>
        <button className="modal-close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default RecommendationModal;
