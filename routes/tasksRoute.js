const express = require("express");
const Router = express.Router();

const {
  getAllTasks,
  getSingleTask,
  createSingleTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

Router.get("/", getAllTasks);
Router.get("/:id", getSingleTask);
Router.post("/", createSingleTask);
Router.patch("/:id", updateTask);
Router.delete("/:id", deleteTask);

// Router.route("/").get(getAllTasks).post(createSingleTask);
// Router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = Router;
