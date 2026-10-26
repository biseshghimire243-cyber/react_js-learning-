function App() {
  const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Transport", amount: 1800 },
    { category: "Education", amount: 3000 },
    { category: "Entertainment", amount: 1200 },
    { category: "Internet", amount: 1000 },
  ];

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const highestExpense = expenses.reduce((highest, expense) =>
    expense.amount > highest.amount ? expense : highest
  );

  return (
    <div>
      <h1>Personal Expense Analyzer</h1>

      {expenses.map((expense) => (
        <p key={expense.category}>
          {expense.category}: Rs. {expense.amount}
        </p>
      ))}

      <h2>Total Expenses: Rs. {total}</h2>
      <h3>Highest Category: {highestExpense.category}</h3>
      <h3>Highest Amount: Rs. {highestExpense.amount}</h3>
    </div>
  );
}

export default App;