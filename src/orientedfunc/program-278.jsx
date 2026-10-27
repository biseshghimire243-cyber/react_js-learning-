function App() {
  const budget = 25000;

  const expenses = [
    { category: "Transport", amount: 5000 },
    { category: "Hotel", amount: 8000 },
    { category: "Food", amount: 4000 },
    { category: "Activities", amount: 3000 },
  ];

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const remaining = budget - totalExpense;

  return (
    <div>
      <h1>Travel Budget Planner</h1>
      <h3>Budget: Rs. {budget}</h3>

      {expenses.map((expense) => (
        <p key={expense.category}>
          {expense.category}: Rs. {expense.amount}
        </p>
      ))}

      <h3>Total Expenses: Rs. {totalExpense}</h3>
      <h2>Remaining: Rs. {remaining}</h2>
      <p>{remaining >= 0 ? "Within Budget" : "Over Budget"}</p>
    </div>
  );
}

export default App;