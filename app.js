const express = require("express");
const app = express();

const tasks = require("./routes/tasksRoute");

//Middleware
app.use(express.json());

//Routes

app.use("/api/vi/tasks", tasks);

const port = 3000;
app.listen(port, console.log(`Server is running on port ${port}...`));
