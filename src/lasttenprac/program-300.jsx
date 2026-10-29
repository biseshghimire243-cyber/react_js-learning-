function formatName(name) {
  return name
    .trim()
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function EmployeeCard({ employee }) {
  return (
    <div>
      <h2>{formatName(employee.name)}</h2>
      <p>Department: {employee.department}</p>
      <p>Email: {employee.email.toLowerCase()}</p>
      <p>Experience: {employee.experience} years</p>
    </div>
  );
}

function App() {
  const employees = [
    {
      id: 1,
      name: "  RAM SHARMA ",
      department: "IT",
      email: "RAM@EXAMPLE.COM",
      experience: 3,
    },
    {
      id: 2,
      name: "sita adhikari",
      department: "Design",
      email: "SITA@EXAMPLE.COM",
      experience: 2,
    },
  ];

  return (
    <div>
      <h1>Employee Directory</h1>

      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}

export default App;