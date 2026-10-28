function App() {
  const teams = [
    { name: "Eagles", played: 5, won: 4, drawn: 1, lost: 0 },
    { name: "Tigers", played: 5, won: 3, drawn: 0, lost: 2 },
    { name: "Lions", played: 5, won: 2, drawn: 2, lost: 1 },
    { name: "Wolves", played: 5, won: 1, drawn: 1, lost: 3 },
  ];

  const standings = [...teams].sort(
    (a, b) =>
      b.won * 3 + b.drawn - (a.won * 3 + a.drawn)
  );

  return (
    <div>
      <h1>Football League Points Table</h1>

      {standings.map((team, index) => {
        const points = team.won * 3 + team.drawn;

        return (
          <div key={team.name}>
            <h3>
              Rank {index + 1}: {team.name}
            </h3>
            <p>Played: {team.played}</p>
            <p>Won: {team.won}</p>
            <p>Drawn: {team.drawn}</p>
            <p>Lost: {team.lost}</p>
            <h4>Points: {points}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;