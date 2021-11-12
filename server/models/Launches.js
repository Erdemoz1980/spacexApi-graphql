const mongoose = require('mongoose');

const launchSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  date_local: { type: String, required: true },
  success: { type: Boolean, required: true },
  crew: { type: Array, default: [] },
  rocket: { type: String, required: true },
  
});

module.exports = mongoose.model('Launches', launchSchema);