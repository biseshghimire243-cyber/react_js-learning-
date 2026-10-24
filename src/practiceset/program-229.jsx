function Workout({ exercise, duration, caloriesPerMinute }) {
  const caloriesBurned = duration * caloriesPerMinute;

  return (
    <div>
      <h3>{exercise}</h3>
      <p>Duration: {duration} minutes</p>
      <p>Calories Per Minute: {caloriesPerMinute}</p>
      <p>Estimated Calories Burned: {caloriesBurned}</p>
      <p>
        {duration >= 45
          ? "Long Workout Session"
          : duration >= 20
          ? "Moderate Workout Session"
          : "Short Workout Session"}
      </p>
    </div>
  );
}

export default function App() {
  const workouts = [
    { id: 1, exercise: "Running", duration: 30, caloriesPerMinute: 10 },
    { id: 2, exercise: "Cycling", duration: 45, caloriesPerMinute: 8 },
    { id: 3, exercise: "Walking", duration: 20, caloriesPerMinute: 4 },
  ];

  return (
    <div>
      <h1>Fitness Calorie Calculator</h1>
      {workouts.map((workout) => (
        <Workout key={workout.id} {...workout} />
      ))}
    </div>
  );
}