import React from "react";

const TodoItem = () => {
  return (
    <>
      <div className="todos">
        <div className="todo-item">
          <figure className="check-icon">
            <img src="images/icon-check.svg" alt="check icon" />
          </figure>
          <p className="todo-text">Done with everything </p>
        </div>
        <figure className="cancel-icon">
          <img src="images/icon-cross.svg" alt="cancel icon" />
        </figure>
      </div>
      <div className="line"></div>
      <div className="todos">
        <div className="todo-item">
          <figure className="check-icon checked-background">
            <img src="images/icon-check.svg" alt="check icon" />
          </figure>
          <p className="todo-text checked-text">Done with everything </p>
        </div>
        <figure className="cancel-icon">
          <img src="images/icon-cross.svg" alt="cancel icon" />
        </figure>
      </div>
      <div className="line"></div>
    </>
  );
};

export default TodoItem;
