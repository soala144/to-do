import React from "react";

const TodoItem = ({ todoItem, todoList, onTodolist }) => {
  const handleDeleteTodo = (id) => {
    onTodolist(todoList.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="todos">
        <div className="todo-item">
          <figure className="check-icon">
            <img src="images/icon-check.svg" alt="check icon" />
          </figure>
          <p className="todo-text"> {todoItem.text}</p>
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
