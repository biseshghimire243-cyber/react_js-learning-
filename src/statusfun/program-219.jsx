function ScholarshipStudent({ name, percentage, familyIncome }) {
  const eligible = percentage >= 80 && familyIncome <= 300000;

  return (
    <div>
      <h3>{name}</h3>
      <p>Academic Percentage: {percentage}%</p>
      <p>Annual Family Income: Rs. {familyIncome}</p>
      <p>
        {eligible
          ? "Eligible for Scholarship"
          : "Not Eligible for Scholarship"}
      </p>
    </div>
  );
}

export default function App() {
  const students = [
    { id: 1, name: "Aarav", percentage: 88, familyIncome: 250000 },
    { id: 2, name: "Sita", percentage: 92, familyIncome: 400000 },
    { id: 3, name: "Rohan", percentage: 72, familyIncome: 200000 },
  ];

  return (
    <div>
      <h1>Scholarship Eligibility Checker</h1>
      {students.map((student) => (
        <ScholarshipStudent key={student.id} {...student} />
      ))}
    </div>
  );
}