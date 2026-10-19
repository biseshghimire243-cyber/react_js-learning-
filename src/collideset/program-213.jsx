function Employee({ name, tasksCompleted, tasksAssigned }) {
  const percentage = (tasksCompleted / tasksAssigned) * 100;

  return (
    <div>
      <h3>{name}</h3>
      <p>Tasks Assigned: {tasksAssigned}</p>
      <p>Tasks Completed: {tasksCompleted}</p>
      <p>Completion: {percentage.toFixed(1)}%</p>
      <p>
        {percentage >= 90
          ? "Excellent Performance"
          : percentage >= 60
          ? "Good Progress"
          : "Needs Improvement"}
      </p>
    </div>
  );
}

export default function App() {
  const employees = [
    { id: 1, name: "Aarav", tasksCompleted: 18, tasksAssigned: 20 },
    { id: 2, name: "Sita", tasksCompleted: 14, tasksAssigned: 20 },
    { id: 3, name: "Rohan", tasksCompleted: 8, tasksAssigned: 20 },
  ];

  return (
    <div>
      <h1>Employee Performance Dashboard</h1>
      {employees.map((employee) => (
        <Employee key={employee.id} {...employee} />
      ))}
    </div>
  );
}