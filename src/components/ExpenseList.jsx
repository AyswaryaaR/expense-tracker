import "../styles/expenses.css";
const ExpenseList = ({ expenses, setEditExp, deleteExpense }) => {
  const totalExpense = expenses.reduce((acc, exp) => acc + Number(exp.cost), 0);
  return (
    <>
      <table className="expense-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Date</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses &&
            expenses.map((exp) => (
              <tr>
                <td>{exp.product}</td>
                <td>{exp.date}</td>
                <td>{exp.cost}</td>
                <td>
                  <button className="edit" onClick={() => setEditExp(exp)}>
                    Edit
                  </button>
                  <button onClick={() => deleteExpense(exp.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
        <b>Total:</b> {totalExpense.toFixed(2)}
      </table>
    </>
  );
};
export default ExpenseList;
