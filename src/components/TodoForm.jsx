
import { useState } from "react";
import { useTodos } from "../context/TodoContext";

export default function TodoForm() {
  const [input, setInput] = useState("");
  const { addTask } = useTodos();

  function handleSubmit(event) {
    event.preventDefault();

    if (!input.trim()) return;

    addTask(input);
    setInput("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="What do you need to do?"
        aria-label="Enter a task"
      />

      <button className="add-btn" type="submit">
        + Add Task
      </button>
    </form>
  );
}
