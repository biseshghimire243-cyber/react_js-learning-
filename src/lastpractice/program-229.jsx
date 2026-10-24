function WaterTracker({ name, target, consumed }) {
  const percentage = (consumed / target) * 100;
  const remaining = Math.max(target - consumed, 0);

  return (
    <div>
      <h3>{name}</h3>
      <p>Daily Target: {target} litres</p>
      <p>Water Consumed: {consumed} litres</p>
      <p>Remaining to Target: {remaining.toFixed(1)} litres</p>
      <p>Target Progress: {percentage.toFixed(1)}%</p>
      <p>
        {consumed >= target
          ? "Daily Target Reached"
          : "Keep Tracking Your Water Intake"}
      </p>
    </div>
  );
}

export default function App() {
  const people = [
    { id: 1, name: "Aarav", target: 2.5, consumed: 2.5 },
    { id: 2, name: "Sita", target: 2, consumed: 1.4 },
    { id: 3, name: "Rohan", target: 3, consumed: 1.8 },
  ];

  return (
    <div>
      <h1>Water Consumption Tracker</h1>
      {people.map((person) => (
        <WaterTracker key={person.id} {...person} />
      ))}
    </div>
  );
}