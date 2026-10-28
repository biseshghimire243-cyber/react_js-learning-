function App() {
  const monthlyIncome = 60000;

  const expenses = [
    { category: "Rent", amount: 15000 },
    { category: "Food", amount: 12000 },
    { category: "Transport", amount: 4000 },
    { category: "Education", amount: 8000 },
    { category: "Utilities", amount: 3000 },
  ];

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const savings = monthlyIncome - totalExpenses;

  return (
    <div>
      <h1>Household Budget Report</h1>
      <h3>Monthly Income: Rs. {monthlyIncome}</h3>

      {expenses.map((expense) => (
        <p key={expense.category}>
          {expense.category}: Rs. {expense.amount}
        </p>
      ))}

      <h3>Total Expenses: Rs. {totalExpenses}</h3>
      <h2>Remaining Savings: Rs. {savings}</h2>
      <p>{savings >= 0 ? "Within Budget" : "Over Budget"}</p>
    </div>
  );
}

export default App;