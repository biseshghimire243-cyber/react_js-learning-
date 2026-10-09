function TeamCard({ name, country, wins, losses }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Wins: {wins}</p>
            <p>Losses: {losses}</p>

            {wins > losses ? (
                <p>Winning Team</p>
            ) : (
                <p>Needs Improvement</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <TeamCard
                name="Nepal Warriors"
                country="Nepal"
                wins={8}
                losses={3}
            />

            <TeamCard
                name="City Stars"
                country="India"
                wins={3}
                losses={7}
            />
        </div>
    );
}

export default App;