const FilterButtons = ({ filter, onFilter, screenSize }) => {
  return (
    <div className={`filter-buttons ${screenSize}`}>
      <button
        className={filter == "All" ? "active" : ""}
        onClick={() => onFilter("All")}
      >
        All
      </button>
      <button
        onClick={() => onFilter("Active")}
        className={filter == "Active" ? "active" : ""}
      >
        Active
      </button>
      <button
        onClick={() => onFilter("Completed")}
        className={filter == "Completed" ? "active" : ""}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;
