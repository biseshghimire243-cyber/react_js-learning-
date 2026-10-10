function SavingsCalculator({ name, income, expenses }) {
    const savings = income - expenses;

    return (
        <div>
            <h2>{name}</h2>
            <p>Monthly Income: Rs. {income}</p>
            <p>Monthly Expenses: Rs. {expenses}</p>
            <p>Savings: Rs. {savings}</p>

            {savings > 0 ? (
                <p>Good! You saved money.</p>
            ) : (
                <p>Review your expenses.</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <SavingsCalculator name="Bishesh" income={30000} expenses={22000} />
            <SavingsCalculator name="Rahul" income={25000} expenses={27000} />
        </div>
    );
}

export default App;