
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/Todolist";
import { useTodos } from "../context/TodoContext";

export default function Home() {
  const { tasks } = useTodos();

  return (
    <>
      <Navbar />

      <main className="container">
        <header className="hero">
          <p className="eyebrow">YOUR PERSONAL ASSISTANT</p>

          <h1>
            Make today <span>count.</span>
          </h1>

          <p className="subtitle">
            Small steps every day lead to big results.
          </p>
        </header>

        <Stats tasks={tasks} />

        <section className="task-section">
          <TodoForm />
          <TodoList />
        </section>

        <footer>Made with focus. One task at a time.</footer>
      </main>
    </>
  );
}
