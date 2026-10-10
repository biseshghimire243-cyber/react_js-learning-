function SportsPlayerCard({ name, sport, matches, goals }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Sport: {sport}</p>
            <p>Matches Played: {matches}</p>
            <p>Goals Scored: {goals}</p>

            {goals >= 10 && <p>Top Scorer!</p>}
        </div>
    );
}

function App() {
    const players = [
        { id: 1, name: "Player One", sport: "Football", matches: 12, goals: 14 },
        { id: 2, name: "Player Two", sport: "Football", matches: 10, goals: 6 },
        { id: 3, name: "Player Three", sport: "Football", matches: 15, goals: 11 }
    ];

    return (
        <div>
            {players.map((player) => (
                <SportsPlayerCard
                    key={player.id}
                    name={player.name}
                    sport={player.sport}
                    matches={player.matches}
                    goals={player.goals}
                />
            ))}
        </div>
    );
}

export default App;