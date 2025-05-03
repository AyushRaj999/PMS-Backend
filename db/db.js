const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://Ayush:Ayush%40123@cluster0.rbuxq.mongodb.net/pms`
      );
      console.log("MongoDB Connected Successfully ✅");
    } catch (error) {
      console.error("MongoDB Connection Error ❌:", error);
      process.exit(1); // Exit process if connection fails
    }
  };
  module.exports = connectDB();