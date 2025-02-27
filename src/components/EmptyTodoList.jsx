const EmptyTodoList = ({ filter }) => {
  const getMessage = () => {
    if (filter === "Active") {
      return "No Undone Task!";
    }
    if (filter === "Completed") {
      return "No completed task!";
    } else {
      return "No task for today!";
    }
  };
  return (
    <>
      <div className="empty-todo">
        <figure>
          <img src="\images\empty-todolist_illustration.png" alt="" />
        </figure>
        <p>{getMessage()}</p>
      </div>
      <div className="line"></div>
    </>
  );
};

export default EmptyTodoList;
