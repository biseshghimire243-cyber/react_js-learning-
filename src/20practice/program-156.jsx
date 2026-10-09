function ExpenseCard({ title, amount, category }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Category: {category}</p>
            <p>Amount: Rs. {amount}</p>
        </div>
    );
}

function App() {
    const expenses = [
        { id: 1, title: "Groceries", amount: 2500, category: "Food" },
        { id: 2, title: "Internet", amount: 1200, category: "Bills" },
        { id: 3, title: "Bus Fare", amount: 500, category: "Transport" }
    ];

    const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

    return (
        <div>
            <h1>Expense Tracker</h1>

            {expenses.map((expense) => (
                <ExpenseCard
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    category={expense.category}
                />
            ))}

            <h2>Total Expenses: Rs. {total}</h2>
        </div>
    );
}

export default App;