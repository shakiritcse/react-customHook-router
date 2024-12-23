import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [todoTitle, seTodoTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // filter

  const filterOption = () => {
    if (filter === "completed") {
      return "completed=true";
    } else if (filter === "pending") {
      return "completed=false";
    } else {
      return "";
    }
  };
  // get todos
  const getAllTodos = async () => {
    const res = await fetch(`http://localhost:3000/todo?${filterOption()}`);
    const data = await res.json();
    setTodos(data);
  };
  useEffect(() => {
    getAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  // submit Handler
  const submitHandler = async (e) => {
    e.preventDefault();
    const newTodos = {
      title: todoTitle,
      completed: false,
    };
    await fetch(`http://localhost:3000/todo`, {
      method: "POST",
      body: JSON.stringify(newTodos),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await getAllTodos();
    seTodoTitle("");
  };

  // RemoveHandler
  const RemoveHandler = async (todoId) => {
    await fetch(`http://localhost:3000/todo/${todoId}`, {
      method: "DELETE",
    });
    await getAllTodos();
  };

  // UpdateHandler
  const updateHandler = async (todo) => {
    await fetch(`http://localhost:3000/todo/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...todo,
        completed: !todo.completed,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getAllTodos();
  };
  return (
    <div className="fullbody" style={{ textAlign: "center", padding: "2rem"}}>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => {
            seTodoTitle(e.target.value);
          }}
        />
        <button type="submit">Create</button>
      </form>
      <div className="filter-option">
        <select
          name=""
          id=""
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div>
        <h2>All Todos</h2>
        <ul style={{listStyleType:'none'}}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateHandler(todo)}
              />
              <span>{todo.title}</span>
              <button onClick={() => RemoveHandler(todo.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
