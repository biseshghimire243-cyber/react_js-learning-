function App() {
  const transactions = [
    { type: "Deposit", amount: 5000 },
    { type: "Withdrawal", amount: 1500 },
    { type: "Deposit", amount: 3000 },
    { type: "Withdrawal", amount: 800 },
  ];

  const deposits = transactions
    .filter((item) => item.type === "Deposit")
    .reduce((sum, item) => sum + item.amount, 0);

  const withdrawals = transactions
    .filter((item) => item.type === "Withdrawal")
    .reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      <h1>Banking Transaction Summary</h1>

      {transactions.map((item, index) => (
        <p key={index}>
          {item.type}: Rs. {item.amount}
        </p>
      ))}

      <h3>Total Deposits: Rs. {deposits}</h3>
      <h3>Total Withdrawals: Rs. {withdrawals}</h3>
      <h2>Net Amount: Rs. {deposits - withdrawals}</h2>
    </div>
  );
}

export default App;