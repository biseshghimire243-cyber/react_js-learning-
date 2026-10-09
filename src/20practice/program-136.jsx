function BankAccount({ name, balance, active }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Balance: Rs. {balance}</p>

            {active ? (
                <p>Account Active</p>
            ) : (
                <p>Account Inactive</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <BankAccount
                name="Bishesh"
                balance={25000}
                active={true}
            />

            <BankAccount
                name="Rahul"
                balance={5000}
                active={false}
            />
        </div>
    );
}

export default App;