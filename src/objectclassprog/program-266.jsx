function App() {
  const teams = [
    { name: "Team A", played: 5, won: 4, lost: 1 },
    { name: "Team B", played: 5, won: 3, lost: 2 },
    { name: "Team C", played: 5, won: 2, lost: 3 },
    { name: "Team D", played: 5, won: 1, lost: 4 },
  ];

  return (
    <div>
      <h1>Sports Team Scoreboard</h1>

      {teams.map((team) => (
        <div key={team.name}>
          <h3>{team.name}</h3>
          <p>Matches Played: {team.played}</p>
          <p>Won: {team.won}</p>
          <p>Lost: {team.lost}</p>
          <p>Points: {team.won * 3}</p>
        </div>
      ))}
    </div>
  );
}

export default App;