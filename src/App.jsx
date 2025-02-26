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
import { useState } from "react";
function App() {
  const [text, setText] = useState("");
  const [todoList, setTodoList] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;
    const newTodo = { text, id: Date.now(), completed: false };
    setTodoList((todo) => [...todo, newTodo]);
    setText("");
  }

  return (
    <div className="App">
      <Header>
        <Title />
        <ThemeIcon />
      </Header>
      <TodoForm onText={setText} handleSubmit={handleSubmit} text={text} />

      <TodoList>
        {todoList.length === 0 ? (
          <EmptyTodoList />
        ) : (
          todoList.map((todoItem) => (
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
          <NoOfItemsLeft />
          <FilterButtons />
          <ClearCompleted />
        </div>
      </TodoList>
    </div>
  );
}
export default App;
