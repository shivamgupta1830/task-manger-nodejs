const mongoose = require("mongoose");

//   mongodb+srv://shivamgupta26206:<password>@nodejs.1uyvgix.mongodb.net/

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
