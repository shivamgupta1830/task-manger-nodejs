const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const getSingleTask = (req, res) => {
  res.send("get single task");
};

const createSingleTask = (req, res) => {
  res.send("create single task");
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createSingleTask,
  updateTask,
  deleteTask,
};
