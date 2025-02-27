import FilterButtons from "./components/FilterButtons";
import ThemeIcon from "./components/ThemeIcon";
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import EmptyTodoList from "./components/EmptyTodoList";
import ClearCompleted from "./components/ClearCompleted";
import NoOfItemsLeft from "./components/NoOfItemsLeft";
import { useEffect, useState } from "react";
function App() {
  const getData = () => {
    const data = JSON.parse(localStorage.getItem("TodoList"));
    if (data) {
      return JSON.parse(localStorage.getItem("TodoList"));
    } else {
      return [];
    }
  };

  // Stated
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState(getData());
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("TodoList", JSON.stringify(todoList));
  }, [todoList]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    const newTodo = { text, id: Date.now(), completed: false };
    setTodoList((todo) => [...todo, newTodo]);
    setText("");
  }

  const filterdTodoList = todoList.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return (
    <div className="App">
      <Header>
        <Title />
        <ThemeIcon />
      </Header>
      <TodoForm onText={setText} handleSubmit={handleSubmit} text={text} />

      <TodoList>
        {filterdTodoList.length === 0 ? (
          <EmptyTodoList filter={filter} />
        ) : (
          filterdTodoList.map((todoItem) => (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              onTodolist={setTodoList}
              todoList={todoList}
            />
          ))
        )}

        {/* <EmptyTodoList /> */}
        <div className="todo-control">
          <NoOfItemsLeft todoList={todoList} />
          <FilterButtons
            filter={filter}
            onFilter={setFilter}
            screenSize="desktop"
          />
          <ClearCompleted onTodolist={setTodoList} />
        </div>
      </TodoList>
      <FilterButtons filter={filter} onFilter={setFilter} screenSize="mobile" />
    </div>
  );
}
export default App;
