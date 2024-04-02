const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createSingleTask = (req, res) => {
  res.json(req.body);
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
