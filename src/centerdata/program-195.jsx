function Team({ name, played, won, drawn, lost }) {
  const points = won * 3 + drawn;
  const goalDifference = won * 2 - lost;

  return (
    <div>
      <h3>{name}</h3>
      <p>Matches Played: {played}</p>
      <p>Won: {won} | Drawn: {drawn} | Lost: {lost}</p>
      <p>Points: {points}</p>
      <p>Goal Difference Estimate: {goalDifference}</p>
    </div>
  );
}

export default function App() {
  const teams = [
    { id: 1, name: "Team Everest", played: 5, won: 4, drawn: 1, lost: 0 },
    { id: 2, name: "Team Himalaya", played: 5, won: 3, drawn: 0, lost: 2 },
    { id: 3, name: "Team Valley", played: 5, won: 1, drawn: 2, lost: 2 },
  ];

  return (
    <div>
      <h1>Football Team Statistics</h1>
      {teams.map((team) => (
        <Team key={team.id} {...team} />
      ))}
    </div>
  );
}