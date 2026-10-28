
import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import TodoItem from "./Todolist";

export default function TodoList() {
  const { tasks } = useTodos();
  const [filter, setFilter] = useState("All");

  const visibleTasks = tasks.filter((task) => {
    if (filter === "Pending") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <section className="task-panel">
      <div className="panel-heading">
        <div>
          <h2>My Tasks</h2>
          <p>Keep track of what matters today.</p>
        </div>
      </div>

      <div className="filters">
        {["All", "Pending", "Completed"].map((item) => (
          <button
            key={item}
            type="button"
            className={`filter ${filter === item ? "active" : ""}`}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="task-list">
        {visibleTasks.length > 0 ? (
          visibleTasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">✓</div>
            <h3>
              {filter === "All" ? "No tasks yet" : `No ${filter.toLowerCase()} tasks`}
            </h3>
            <p>Add a task above to get started!</p>
          </div>
        )}
      </div>
    </section>
  );
}
