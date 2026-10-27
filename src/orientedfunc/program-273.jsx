function App() {
  const account = {
    holder: "Aarav Sharma",
    openingBalance: 20000,
    transactions: [5000, -2000, 3000, -1500, -500],
  };

  const balance = account.transactions.reduce(
    (total, amount) => total + amount,
    account.openingBalance
  );

  return (
    <div>
      <h1>Bank Account Balance Report</h1>
      <h3>Account Holder: {account.holder}</h3>
      <p>Opening Balance: Rs. {account.openingBalance}</p>

      <h3>Transactions</h3>
      {account.transactions.map((amount, index) => (
        <p key={index}>
          Transaction {index + 1}: {amount >= 0 ? "+" : ""}Rs. {amount}
        </p>
      ))}

      <h2>Current Balance: Rs. {balance}</h2>
    </div>
  );
}

export default App;