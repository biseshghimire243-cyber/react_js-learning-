function BankAccount({ holder, balance, deposit, withdrawal }) {
  const finalBalance = balance + deposit - withdrawal;

  return (
    <div>
      <h3>Account Holder: {holder}</h3>
      <p>Opening Balance: Rs. {balance}</p>
      <p>Deposit: Rs. {deposit}</p>
      <p>Withdrawal: Rs. {withdrawal}</p>
      <h4>Closing Balance: Rs. {finalBalance}</h4>
      <p>{finalBalance >= 10000 ? "Healthy Balance" : "Low Balance"}</p>
    </div>
  );
}

export default function App() {
  const accounts = [
    { id: 1, holder: "Aarav", balance: 20000, deposit: 5000, withdrawal: 3000 },
    { id: 2, holder: "Sita", balance: 8000, deposit: 2000, withdrawal: 1500 },
    { id: 3, holder: "Rohan", balance: 15000, deposit: 1000, withdrawal: 7000 },
  ];

  return (
    <div>
      <h1>Bank Account Summary</h1>
      {accounts.map((account) => (
        <BankAccount key={account.id} {...account} />
      ))}
    </div>
  );
}