function FootballMatch({ homeTeam, awayTeam, homeScore, awayScore }) {
    let result;

    if (homeScore > awayScore) {
        result = `${homeTeam} Wins`;
    } else if (awayScore > homeScore) {
        result = `${awayTeam} Wins`;
    } else {
        result = "Match Draw";
    }

    return (
        <div>
            <h2>{homeTeam} vs {awayTeam}</h2>
            <p>Score: {homeScore} - {awayScore}</p>
            <p>Result: {result}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <FootballMatch homeTeam="Nepal" awayTeam="India" homeScore={2} awayScore={1} />
            <FootballMatch homeTeam="Brazil" awayTeam="Argentina" homeScore={1} awayScore={1} />
        </div>
    );
}

export default App;