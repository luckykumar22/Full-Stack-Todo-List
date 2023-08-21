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

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((result => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/delete/" + id)
      .then((result => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <h2>Todo List</h2>
      <Create />
      <br />
      {todos.length === 0 ? (
        <h2>No Records</h2>
      ) : (
        todos.map((todo, index) => (
          <div className="task" key={index}>
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? (
                <i className="ri-checkbox-circle-line"></i>
              ) : (
                <i className="ri-circle-line icon"></i>
              )}

              <p>{todo.task}</p>
            </div>

            <div>
              <span>
                <i onClick={()=>handleDelete(todo._id)} className="ri-delete-bin-7-line icon"></i>
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
