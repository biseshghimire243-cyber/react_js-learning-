function App() {
  const students = [
    { name: "Sita", marks: 88 },
    { name: "Ram", marks: 76 },
    { name: "Gita", marks: 95 },
    { name: "Hari", marks: 82 },
  ];

  const rankedStudents = [...students].sort(
    (a, b) => b.marks - a.marks
  );

  return (
    <div>
      <h1>Student Ranking</h1>

      {rankedStudents.map((student, index) => (
        <div key={student.name}>
          <h3>
            Rank {index + 1}: {student.name}
          </h3>
          <p>Marks: {student.marks}</p>
          <p>
            Result: {student.marks >= 40 ? "Pass" : "Fail"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;