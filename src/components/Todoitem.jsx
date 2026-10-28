
import { useTodos } from "../context/TodoContext";

export default function TodoItem({ task }) {
  const { toggleTask, deleteTask } = useTodos();

  return (
    <div className="task-item">
      <input
        className="task-checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
        aria-label={`Complete ${task.title}`}
      />

      <span className={`task-title ${task.completed ? "done" : ""}`}>
        {task.title}
      </span>

      <span
        className={`status ${
          task.completed ? "completed-status" : "pending-status"
        }`}
      >
        {task.completed ? "Completed" : "Active"}
      </span>

      <button
        type="button"
        className="delete-btn"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
        title="Delete task"
      >
        ×
      </button>
    </div>
  );
}
