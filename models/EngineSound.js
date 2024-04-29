// models/EngineSound.js
const mongoose = require('mongoose');

const engineSoundSchema = new mongoose.Schema({
  filename: String,
  status: {
    type: String,
    enum: ['pending', 'good', 'warning'],
    default: 'pending'
  },
  anomalies: [{
    part: String,
    status: String,
    recommendation: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const EngineSound = mongoose.model('EngineSound', engineSoundSchema);

module.exports = EngineSound;
