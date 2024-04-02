const express = require("express");
const app = express();
const tasks = require("./routes/tasksRoute");
const connectDB = require("./db/connectDB");
require("dotenv").config();

//Middleware
app.use(express.json());

//Routes

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
