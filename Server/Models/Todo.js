const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var TodoSchema = new mongoose.Schema({
  task: String,
  done: {
    type: Boolean,
    default: false,
  },
});

//Export the model
module.exports = mongoose.model("todos", TodoSchema);
