import FilterButtons from "./components/FilterButtons";
import ThemeIcon from "./components/ThemeIcon";
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
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
