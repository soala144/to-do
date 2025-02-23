import "./App.css";
import { FilterButtons } from "./components/FilterButtons";
import Header from "./components/Header";
import { ThemeIcon } from "./components/ThemeIcon";
import Title from "./components/Title";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="app">
      <Header>
        <Title />
        <ThemeIcon />
      </Header>
      <TodoForm />
      <TodoList />
      <FilterButtons />
    </div>
  );
}
export default App;
