const mongoose = require('mongoose');

module.exports =  connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected:${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    
  }
};