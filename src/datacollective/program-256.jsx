function App() {
  const employees = [
    { name: "Amit", present: 24, absent: 2 },
    { name: "Suman", present: 22, absent: 4 },
    { name: "Nisha", present: 26, absent: 0 },
    { name: "Rita", present: 20, absent: 6 },
  ];

  return (
    <div>
      <h1>Employee Attendance Report</h1>

      {employees.map((employee) => {
        const totalDays = employee.present + employee.absent;
        const percentage = (employee.present / totalDays) * 100;

        return (
          <div key={employee.name}>
            <h2>{employee.name}</h2>
            <p>Present: {employee.present} days</p>
            <p>Absent: {employee.absent} days</p>
            <p>Attendance: {percentage.toFixed(1)}%</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;