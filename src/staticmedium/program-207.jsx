function FitnessProgress({ name, goal, completed }) {
  const remaining = Math.max(goal - completed, 0);
  const progress = Math.min((completed / goal) * 100, 100);

  return (
    <div>
      <h3>{name}</h3>
      <p>Weekly Goal: {goal} workouts</p>
      <p>Completed Workouts: {completed}</p>
      <p>Remaining Workouts: {remaining}</p>
      <p>Progress: {progress.toFixed(1)}%</p>
      <p>
        {progress >= 100
          ? "Weekly Goal Completed!"
          : progress >= 50
          ? "Great Progress! Keep Going."
          : "Keep Working Toward Your Goal."}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Fitness Progress Tracker</h1>
      <FitnessProgress name="Aarav" goal={5} completed={5} />
      <FitnessProgress name="Sita" goal={5} completed={3} />
      <FitnessProgress name="Rohan" goal={5} completed={1} />
    </div>
  );
}