import { v4 } from "uuid";
const ExpenseForm = ({
  currentExpense,
  setCurrentExpense,
  //addExpense,
  initialExpense,
  editExp,
  setEditExp,
  setExpenses,
}) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCurrentExpense((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editExp) {
      setExpenses((prev) =>
        prev.map((exp) =>
          exp.id === editExp.id ? { ...currentExpense, id: editExp.id } : exp,
        ),
      );
      setEditExp(null);
    } else {
      //addExpense();
      setExpenses((prev) => [...prev, { ...currentExpense, id: v4() }]);
    }
    setCurrentExpense(initialExpense);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="product"
          value={currentExpense.product}
          onChange={handleOnChange}
          className="input"
          placeholder="Product"
        />
        <input
          name="date"
          value={currentExpense.date}
          onChange={handleOnChange}
          className="input"
          placeholder="Date"
        />
        <input
          name="cost"
          value={currentExpense.cost}
          onChange={handleOnChange}
          className="input"
          placeholder="Cost"
        />
        <button type="submit" className="button">
          {editExp ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};
export default ExpenseForm;
