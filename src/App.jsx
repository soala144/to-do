import FilterButtons from "./components/FilterButtons";
import ThemeIcon from "./components/ThemeIcon";
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import EmptyTodoList from "./components/EmptyTodoList";
function App() {
  return (
    <div className="App">
      <Header>
        <Title />
        <ThemeIcon />
      </Header>
      <TodoForm />
      <TodoList>
        {/* <TodoItem /> */}
        <EmptyTodoList />
      </TodoList>
      <FilterButtons />
    </div>
  );
}
export default App;
