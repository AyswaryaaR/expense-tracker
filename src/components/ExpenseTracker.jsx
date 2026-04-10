import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { v4 } from "uuid";
import "../styles/expenses.css";

const ExpenseTracker = () => {
  const initialExpense = {
    product: "",
    date: "",
    cost: "",
    id: "",
    actions: "",
  };
  const [currentExpense, setCurrentExpense] = useState(initialExpense);
  const [editExp, setEditExp] = useState(null);
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    if (editExp) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setCurrentExpense(editExp);
    } else {
      setCurrentExpense(initialExpense);
    }
  }, [editExp]);
  const addExpense = () => {
    setExpenses((prev) => [...prev, { ...currentExpense, id: v4() }]);
  };
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((val) => val.id !== id));
  };
  return (
    <>
      <div className="container">
        <h3>Expense Tracker</h3>
        <ExpenseForm
          currentExpense={currentExpense}
          setCurrentExpense={setCurrentExpense}
          addExpense={addExpense}
          initialExpense={initialExpense}
          setExpenses={setExpenses}
          editExp={editExp}
          setEditExp={setEditExp}
        />
        <div className="list-container">
          <ExpenseList
            expenses={expenses}
            editExp={editExp}
            setEditExp={setEditExp}
            deleteExpense={deleteExpense}
          />
        </div>
      </div>
    </>
  );
};
export default ExpenseTracker;
