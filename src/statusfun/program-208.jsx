function StudentFee({ name, totalFee, paidFee }) {
  const remaining = totalFee - paidFee;

  return (
    <div>
      <h3>{name}</h3>
      <p>Total Fee: Rs. {totalFee}</p>
      <p>Paid Fee: Rs. {paidFee}</p>
      <p>Remaining Fee: Rs. {remaining}</p>
      <p>{remaining === 0 ? "Fee Fully Paid" : "Payment Pending"}</p>
    </div>
  );
}

export default function App() {
  const students = [
    { id: 1, name: "Aarav", totalFee: 30000, paidFee: 30000 },
    { id: 2, name: "Sita", totalFee: 25000, paidFee: 15000 },
    { id: 3, name: "Rohan", totalFee: 28000, paidFee: 10000 },
  ];

  return (
    <div>
      <h1>School Fee Management</h1>
      {students.map((student) => (
        <StudentFee key={student.id} {...student} />
      ))}
    </div>
  );
}