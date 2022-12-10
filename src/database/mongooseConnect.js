const MONGO_DB = process.env.MONGO_DB
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const connect = async () => {
  try {
    await mongoose.connect(MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { 
  connect 
};