function SportCard({ name, players, indoor }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Players: {players}</p>
            <p>
                Type: {indoor ? "Indoor Sport" : "Outdoor Sport"}
            </p>
        </div>
    );
}

function App() {
    const sports = [
        {
            id: 1,
            name: "Football",
            players: 11,
            indoor: false
        },
        {
            id: 2,
            name: "Basketball",
            players: 5,
            indoor: true
        },
        {
            id: 3,
            name: "Cricket",
            players: 11,
            indoor: false
        }
    ];

    return (
        <div>
            <h1>Sports List</h1>

            {sports.map((sport) => (
                <SportCard
                    key={sport.id}
                    name={sport.name}
                    players={sport.players}
                    indoor={sport.indoor}
                />
            ))}
        </div>
    );
}

export default App;