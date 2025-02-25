const EmptyTodoList = () => {
  return (
    <>
      <div className="empty-todo">
        <figure>
          <img src="\images\empty-todolist_illustration.png" alt="" />
        </figure>
        <p>No Active Task</p>
      </div>
      <div className="line"></div>
    </>
  );
};

export default EmptyTodoList;
