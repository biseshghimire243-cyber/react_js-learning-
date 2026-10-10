function WaterIntakeCard({ name, consumed, target }) {
    const remaining = target - consumed;

    return (
        <div>
            <h2>{name}</h2>
            <p>Consumed: {consumed} Liters</p>
            <p>Daily Target: {target} Liters</p>

            {remaining > 0 ? (
                <p>Remaining: {remaining} Liters</p>
            ) : (
                <p>Daily Target Achieved!</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <WaterIntakeCard name="Bishesh" consumed={2} target={3} />
            <WaterIntakeCard name="Rahul" consumed={3} target={3} />
        </div>
    );
}

export default App;