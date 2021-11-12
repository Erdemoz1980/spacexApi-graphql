const mongoose = require('mongoose');

const rocketSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  active: { type: Boolean, required: true },
  images:{type:Array, default:[]}
  
});

module.exports = mongoose.model('Rockets', rocketSchema);