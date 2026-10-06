function BankAccount({ name, accountType, balance }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Account Type: {accountType}</p>
            <p>Balance: Rs. {balance}</p>

            {balance >= 50000 ? (
                <p>💰 Good Balance</p>
            ) : (
                <p>⚠️ Low Balance</p>
            )}
        </div>
    );
}

function App() {
    const accounts = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            accountType: "Savings",
            balance: 75000
        },
        {
            id: 2,
            name: "Rahul Sharma",
            accountType: "Current",
            balance: 30000
        },
        {
            id: 3,
            name: "Sita Rai",
            accountType: "Savings",
            balance: 90000
        }
    ];

    return (
        <div>
            <h1>Bank Accounts</h1>

            {accounts.map((account) => (
                <BankAccount
                    key={account.id}
                    name={account.name}
                    accountType={account.accountType}
                    balance={account.balance}
                />
            ))}
        </div>
    );
}

export default App;