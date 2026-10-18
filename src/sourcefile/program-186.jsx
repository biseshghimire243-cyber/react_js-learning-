function TrekkingPackage({ name, days, altitude, difficulty }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Duration: {days} days</p>
            <p>Maximum Altitude: {altitude} m</p>
            <p>Difficulty: {difficulty}</p>
            {altitude >= 5000 && <p>High-Altitude Trek</p>}
        </div>
    );
}

function App() {
    const treks = [
        { id: 1, name: "Everest Base Camp", days: 14, altitude: 5364, difficulty: "Hard" },
        { id: 2, name: "Ghorepani Poon Hill", days: 5, altitude: 3210, difficulty: "Easy" },
        { id: 3, name: "Annapurna Circuit", days: 12, altitude: 5416, difficulty: "Hard" }
    ];

    return (
        <div>
            {treks.map((trek) => (
                <TrekkingPackage
                    key={trek.id}
                    name={trek.name}
                    days={trek.days}
                    altitude={trek.altitude}
                    difficulty={trek.difficulty}
                />
            ))}
        </div>
    );
}

export default App;