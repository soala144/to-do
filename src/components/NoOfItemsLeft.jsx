const NoOfItemsLeft = ({ todoList }) => {
  const noOfItemsLeft = todoList.filter(
    (todo) => todo.completed === false
  ).length;
  return (
    <p>{`${noOfItemsLeft} ${noOfItemsLeft <= 1 ? "item" : "items"} left`}</p>
  );
};

export default NoOfItemsLeft;
