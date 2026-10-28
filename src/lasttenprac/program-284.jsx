function App() {
  const employees = [
    { name: "Amit", department: "IT", salary: 50000 },
    { name: "Sita", department: "HR", salary: 40000 },
    { name: "Rohan", department: "IT", salary: 60000 },
    { name: "Nisha", department: "Finance", salary: 45000 },
  ];

  const totalSalary = employees.reduce(
    (sum, employee) => sum + employee.salary,
    0
  );

  return (
    <div>
      <h1>Employee Department Salary Report</h1>

      {employees.map((employee) => (
        <div key={employee.name}>
          <h3>{employee.name}</h3>
          <p>Department: {employee.department}</p>
          <p>Salary: Rs. {employee.salary}</p>
        </div>
      ))}

      <h2>Total Salary Expense: Rs. {totalSalary}</h2>
      <p>Total Employees: {employees.length}</p>
    </div>
  );
}

export default App;