function EmployeeLeave({ name, leaveAllowed, leaveTaken }) {
  const remaining = leaveAllowed - leaveTaken;

  return (
    <div>
      <h3>{name}</h3>
      <p>Annual Leave: {leaveAllowed} days</p>
      <p>Leave Taken: {leaveTaken} days</p>
      <p>Remaining Leave: {remaining} days</p>
      <p>{remaining === 0 ? "No Leave Remaining" : "Leave Available"}</p>
    </div>
  );
}

export default function App() {
  const employees = [
    { id: 1, name: "Aarav", leaveAllowed: 20, leaveTaken: 12 },
    { id: 2, name: "Sita", leaveAllowed: 20, leaveTaken: 20 },
    { id: 3, name: "Rohan", leaveAllowed: 20, leaveTaken: 5 },
  ];

  return (
    <div>
      <h1>Employee Leave Management</h1>
      {employees.map((employee) => (
        <EmployeeLeave key={employee.id} {...employee} />
      ))}
    </div>
  );
}