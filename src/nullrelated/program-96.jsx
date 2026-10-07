function TeamCard({ name, sport, members, winning }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Sport: {sport}</p>
            <p>Members: {members}</p>

            {winning ? (
                <p>🏆 Winning Team</p>
            ) : (
                <p>Keep Practicing</p>
            )}
        </div>
    );
}

function App() {
    const teams = [
        {
            id: 1,
            name: "Nepal Warriors",
            sport: "Cricket",
            members: 11,
            winning: true
        },
        {
            id: 2,
            name: "City Tigers",
            sport: "Football",
            members: 11,
            winning: false
        },
        {
            id: 3,
            name: "Mountain Stars",
            sport: "Basketball",
            members: 5,
            winning: true
        }
    ];

    return (
        <div>
            <h1>Sports Teams</h1>

            {teams.map((team) => (
                <TeamCard
                    key={team.id}
                    name={team.name}
                    sport={team.sport}
                    members={team.members}
                    winning={team.winning}
                />
            ))}
        </div>
    );
}

export default App;