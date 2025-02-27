const ClearCompleted = ({ onTodolist }) => {
  function handleClearCompleted() {
    onTodolist((todo) => todo.filter((todo) => todo.completed !== true));
  }
  return (
    <button className="clear-list" onClick={handleClearCompleted}>
      Clear Completed
    </button>
  );
};

export default ClearCompleted;
