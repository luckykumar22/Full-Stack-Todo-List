import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((result) => {
        console.log("Data received from server:", result.data); // Log the received data
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <h2>No Records</h2>
      ) : (
        todos.map((todo, index) => (
          <div className="task" key={index}>
            <p>{todo.task}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
