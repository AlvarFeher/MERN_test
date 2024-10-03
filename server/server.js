import express from "express";
import cors from "cors";
import records from "./routes/todo.js";
import connectDB from "./db/connection.js";  // Import the new connectDB function

const PORT = process.env.PORT || 5050;
const app = express();

// Connect to MongoDB using Mongoose
connectDB();

app.use(cors());
app.use(express.json());
app.use("/todos", records);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
