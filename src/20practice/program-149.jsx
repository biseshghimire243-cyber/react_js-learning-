function FitnessPlan({ name, exercises, duration }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Exercises: {exercises}</p>
            <p>Duration: {duration} minutes</p>
        </div>
    );
}

function App() {
    const plans = [
        { id: 1, name: "Chest Day", exercises: 4, duration: 45 },
        { id: 2, name: "Back Day", exercises: 5, duration: 50 },
        { id: 3, name: "Leg Day", exercises: 4, duration: 60 }
    ];

    return (
        <div>
            {plans.map((plan) => (
                <FitnessPlan
                    key={plan.id}
                    name={plan.name}
                    exercises={plan.exercises}
                    duration={plan.duration}
                />
            ))}
        </div>
    );
}

export default App;