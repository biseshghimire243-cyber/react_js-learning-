function App() {
  const employees = [
    { name: "Suman", tasks: 45, completed: 42 },
    { name: "Nisha", tasks: 50, completed: 48 },
    { name: "Rohan", tasks: 40, completed: 30 },
    { name: "Anisha", tasks: 35, completed: 35 },
  ];

  return (
    <div>
      <h1>Employee Performance Analyzer</h1>

      {employees.map((employee) => {
        const percentage = (employee.completed / employee.tasks) * 100;

        return (
          <div key={employee.name}>
            <h3>{employee.name}</h3>
            <p>Assigned Tasks: {employee.tasks}</p>
            <p>Completed Tasks: {employee.completed}</p>
            <p>Completion: {percentage.toFixed(1)}%</p>
            <p>
              Performance:{" "}
              {percentage >= 90
                ? "Excellent"
                : percentage >= 70
                ? "Good"
                : "Needs Improvement"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;