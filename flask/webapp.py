from flask import Flask, jsonify
from flask_cors import CORS
import numpy as np
import time

app = Flask(__name__)
CORS(app)

def predict_anomaly():
    return np.random.choice([True, False])

def determine_fault():
    faults = {
        "Alternator": "good",
        "WaterPump": "good",
        "TensionerBearing": "good",
        "Belt": "good",
        "RadiatorFanMotor": "good",
    }
    selected_fault = np.random.choice(list(faults.keys()))
    faults[selected_fault] = "warning"
    return faults

@app.route('/api/start-scan', methods=['GET'])
def check_anomaly():
    time.sleep(np.random.uniform(1, 2))  # Introduce a small delay
    anomaly_detected = predict_anomaly()
    if anomaly_detected:
        faults = determine_fault()
        return jsonify({"message": "Anomaly Detected!", "faults": faults})
    else:
        return jsonify({"message": "No Anomaly Detected, Engine is good!"})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
