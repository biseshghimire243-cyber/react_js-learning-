function App() {
  const employee = {
    name: "Bishal",
    basicSalary: 30000,
    allowance: 5000,
    deduction: 2000,
  };

  const totalSalary =
    employee.basicSalary + employee.allowance - employee.deduction;

  return (
    <div>
      <h1>Employee Salary Calculator</h1>
      <p>Name: {employee.name}</p>
      <p>Basic Salary: Rs. {employee.basicSalary}</p>
      <p>Allowance: Rs. {employee.allowance}</p>
      <p>Deduction: Rs. {employee.deduction}</p>
      <h2>Net Salary: Rs. {totalSalary}</h2>
    </div>
  );
}

export default App;