export default function App() {
  const expenses = [
    { id: 1, name: "Food", amount: 1200 },
    { id: 2, name: "Transport", amount: 500 },
    { id: 3, name: "Internet", amount: 1000 },
    { id: 4, name: "Books", amount: 800 },
  ];

  const total = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  return (
    <div>
      <h1>Monthly Expenses</h1>

      {expenses.map((expense) => (
        <p key={expense.id}>
          {expense.name}: Rs. {expense.amount}
        </p>
      ))}

      <h2>Total: Rs. {total}</h2>
      <p>
        {total > 3000
          ? "You have high expenses."
          : "Your expenses are under control."}
      </p>
    </div>
  );
}