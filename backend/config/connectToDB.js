const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    console.log("Attempting MongoDB connection...");

    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

module.exports = connectToDB;
