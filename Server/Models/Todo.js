const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var TodoSchema = new mongoose.Schema({
    task:String
});

//Export the model
module.exports = mongoose.model('todos', TodoSchema);