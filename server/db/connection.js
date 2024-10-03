import mongoose from "mongoose";

const uri = "mongodb+srv://alvarofeherargullos:0mhHScrvVps8XnSR@cluster0.hxntb.mongodb.net/todos?retryWrites=true&w=majority";

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);  // Exit the process if the connection fails
  }
}

export default connectDB;

