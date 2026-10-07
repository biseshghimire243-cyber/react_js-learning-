function BankCard({ name, type, balance, active }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Account: {type}</p>
            <p>Balance: Rs. {balance}</p>

            {active ? (
                <p>Active Account</p>
            ) : (
                <p>Inactive Account</p>
            )}
        </div>
    );
}

function App() {
    const accounts = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            type: "Savings",
            balance: 75000,
            active: true
        },
        {
            id: 2,
            name: "Rahul Sharma",
            type: "Current",
            balance: 45000,
            active: false
        },
        {
            id: 3,
            name: "Sita Rai",
            type: "Savings",
            balance: 90000,
            active: true
        }
    ];

    return (
        <div>
            <h1>Bank Accounts</h1>

            {accounts.map((account) => (
                <BankCard
                    key={account.id}
                    name={account.name}
                    type={account.type}
                    balance={account.balance}
                    active={account.active}
                />
            ))}
        </div>
    );
}

export default App;