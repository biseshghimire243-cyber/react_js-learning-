function App() {
  const students = [
    { name: "Anisha", percentage: 95, familyIncome: 250000 },
    { name: "Rohan", percentage: 82, familyIncome: 400000 },
    { name: "Suman", percentage: 76, familyIncome: 200000 },
    { name: "Nisha", percentage: 88, familyIncome: 700000 },
  ];

  return (
    <div>
      <h1>University Scholarship Eligibility</h1>

      {students.map((student) => {
        const eligible =
          student.percentage >= 85 && student.familyIncome <= 500000;

        return (
          <div key={student.name}>
            <h3>{student.name}</h3>
            <p>Academic Percentage: {student.percentage}%</p>
            <p>Annual Family Income: Rs. {student.familyIncome}</p>
            <p>
              Scholarship: {eligible ? "Eligible" : "Not Eligible"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;