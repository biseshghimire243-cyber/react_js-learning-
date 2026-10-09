function FootballTeam({ name, country, players }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Players: {players}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <FootballTeam
                name="Nepal"
                country="Nepal"
                players={23}
            />

            <FootballTeam
                name="Brazil"
                country="Brazil"
                players={23}
            />

            <FootballTeam
                name="Argentina"
                country="Argentina"
                players={23}
            />
        </div>
    );
}

export default App;