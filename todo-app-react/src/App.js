import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState(""); // Current input
  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage on initial render
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task
  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  // Remove task by index
  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  // Toggle completed status
  const toggleComplete = (indexToToggle) => {
    const updatedTasks = tasks.map((t, index) =>
      index === indexToToggle ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>My To-Do App</h1>

      {/* Input section */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") addTask();
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Task list */}
      <ul className="task-list">
        {tasks.map((t, index) => (
          <li key={index}>
            <span
              onClick={() => toggleComplete(index)}
              style={{
                textDecoration: t.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {t.text}
            </span>
            <button
              className="delete-btn"
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
