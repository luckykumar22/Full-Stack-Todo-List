import { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault(); // Prevent form submission

    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {location.reload()})
      .catch((err) => console.log("Error adding task:", err));
  };

  return (
    <div className="create_form">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter tasks"
        />
        <button onClick={handleAddTask} type="submit">Add</button>
      </form>
    </div>
  );
};

export default Create;
