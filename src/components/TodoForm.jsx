const TodoForm = ({ onText, handleSubmit }) => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => onText(e.target.value)}
      />

      <button onClick={handleSubmit}></button>
    </form>
  );
};

export default TodoForm;
