const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const TodoSchema = require("./Models/Todo"); // Make sure the path to the Todo model is correct
const mongodbURL = process.env.MONGODB_URL;

const app = express();
const port = process.env.PORT || 3000;

// Use middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/get", (req, res) => {
  TodoSchema.find()
    .then((res) => res.json(res))
    .catch((err) => console.log(err));
});

app.put('/update/:id'(req,res)=>{
  const {id }= req.params;
  console.log(id);
  TodoSchema.findByIdAndUpdate({
    {_id:id,},
    {done:true}
  })
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
})

// Create a new todo item
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoSchema.create({
    task: task,
  })
    .then((createdTodo) => {
      res.json(createdTodo);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("Server running on port", port);
});
