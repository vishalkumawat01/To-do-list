
import { createContext, useContext, useEffect, useState } from "react";

const TodoContext = createContext(null);

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("taskmate-tasks")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("taskmate-tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title) {
    if (!title.trim()) return;

    setTasks((previous) => [
      ...previous,
      {
        id: `${Date.now()}-${Math.random()}`,
        title: title.trim(),
        completed: false,
      },
    ]);
  }

  function toggleTask(id) {
    setTasks((previous) =>
      previous.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((previous) => previous.filter((task) => task.id !== id));
  }

  return (
    <TodoContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error("useTodos must be used inside TodoProvider");
  }

  return context;
}
