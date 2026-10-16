function Goal({ title, target, completed, unit }) {
  const progress = Math.min((completed / target) * 100, 100);
  const remaining = Math.max(target - completed, 0);

  return (
    <div>
      <h3>{title}</h3>
      <p>Target: {target} {unit}</p>
      <p>Completed: {completed} {unit}</p>
      <p>Remaining: {remaining} {unit}</p>
      <p>Progress: {progress.toFixed(1)}%</p>

      <p>
        {progress >= 100
          ? "Goal Achieved!"
          : progress >= 50
          ? "Great Work! Keep Going."
          : "Keep Working Toward Your Goal."}
      </p>
    </div>
  );
}

export default function App() {
  const goals = [
    { id: 1, title: "Read Books", target: 12, completed: 8, unit: "books" },
    { id: 2, title: "Learn React", target: 20, completed: 15, unit: "lessons" },
    { id: 3, title: "Daily Walking", target: 100, completed: 40, unit: "km" },
    { id: 4, title: "Complete Projects", target: 5, completed: 5, unit: "projects" },
  ];

  return (
    <div>
      <h1>Personal Goal Progress Tracker</h1>
      {goals.map((goal) => (
        <Goal key={goal.id} {...goal} />
      ))}
    </div>
  );
}