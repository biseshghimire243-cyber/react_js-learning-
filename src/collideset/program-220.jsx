function Team({ name, wins, draws, losses }) {
  const played = wins + draws + losses;
  const points = wins * 3 + draws;

  return (
    <div>
      <h3>{name}</h3>
      <p>Matches Played: {played}</p>
      <p>Wins: {wins}</p>
      <p>Draws: {draws}</p>
      <p>Losses: {losses}</p>
      <p>Total Points: {points}</p>
    </div>
  );
}

export default function App() {
  const teams = [
    { id: 1, name: "Mountain FC", wins: 4, draws: 1, losses: 1 },
    { id: 2, name: "Valley United", wins: 3, draws: 2, losses: 1 },
    { id: 3, name: "Eastern Stars", wins: 2, draws: 1, losses: 3 },
    { id: 4, name: "City Warriors", wins: 1, draws: 2, losses: 3 },
  ];

  return (
    <div>
      <h1>Sports Tournament Points Table</h1>
      {teams.map((team) => (
        <Team key={team.id} {...team} />
      ))}
    </div>
  );
}