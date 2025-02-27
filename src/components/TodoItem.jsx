import React from "react";

const TodoItem = ({ todoItem, todoList, onTodolist }) => {
  const handleToggleTodo = (id) => {
    onTodolist((todoList) =>
      todoList.map((todo) =>
        id === todo.id ? { ...todo, completed: !todoItem.completed } : todo
      )
    );
  };
  const handleDeleteTodo = (id) => {
    onTodolist(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="todos">
        <div className="todo-item">
          <figure
            className={`check-icon ${
              todoItem.completed && "checked-background"
            }`}
            onClick={() => handleToggleTodo(todoItem.id)}
          >
            {todoItem.completed && (
              <img src="images/icon-check.svg" alt="check icon" />
            )}
          </figure>
          <p className={`todo-text ${todoItem.completed && "checked-text"}`}>
            {" "}
            {todoItem.text}
          </p>
        </div>
        <figure
          className="cancel-icon"
          onClick={() => handleDeleteTodo(todoItem.id)}
        >
          <img src="images/icon-cross.svg" alt="cancel icon" />
        </figure>
      </div>
      <div className="line"></div>

      <div className="line"></div>
    </>
  );
};

export default TodoItem;
