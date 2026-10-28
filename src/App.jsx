
import Home from "./pages/Home";
import { TodoProvider } from "./context/TodoContext";
import "./styles/app.css";

export default function App() {
  return (
    <TodoProvider>
      <Home />
    </TodoProvider>
  );
}
