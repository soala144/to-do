const TodoForm = ({ onText, handleSubmit, text }) => {
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        value={text}
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => onText(e.target.value)}
      />

      <button onClick={handleSubmit}></button>
    </form>
  );
};

export default TodoForm;
