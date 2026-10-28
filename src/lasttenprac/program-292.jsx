function App() {
  const students = [
    { name: "Anisha", percentage: 95, familyIncome: 300000 },
    { name: "Rohan", percentage: 88, familyIncome: 450000 },
    { name: "Suman", percentage: 92, familyIncome: 250000 },
    { name: "Nisha", percentage: 84, familyIncome: 200000 },
  ];

  const eligibleStudents = students
    .filter(
      (student) =>
        student.percentage >= 85 && student.familyIncome <= 500000
    )
    .sort((a, b) => b.percentage - a.percentage);

  return (
    <div>
      <h1>Student Scholarship Ranking</h1>

      {eligibleStudents.length > 0 ? (
        eligibleStudents.map((student, index) => (
          <div key={student.name}>
            <h3>
              Rank {index + 1}: {student.name}
            </h3>
            <p>Academic Percentage: {student.percentage}%</p>
            <p>Family Income: Rs. {student.familyIncome}</p>
            <p>Scholarship Status: Eligible</p>
          </div>
        ))
      ) : (
        <p>No students currently meet the example criteria.</p>
      )}
    </div>
  );
}

export default App;