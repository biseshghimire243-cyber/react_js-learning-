function App() {
  const students = [
    { name: "Ram", marks: 78 },
    { name: "Sita", marks: 92 },
    { name: "Hari", marks: 55 },
    { name: "Gita", marks: 86 },
  ];

  const totalMarks = students.reduce(
    (sum, student) => sum + student.marks,
    0
  );

  const average = totalMarks / students.length;

  const highest = students.reduce((best, student) =>
    student.marks > best.marks ? student : best
  );

  return (
    <div>
      <h1>School Class Performance</h1>

      {students.map((student) => (
        <p key={student.name}>
          {student.name}: {student.marks} marks
        </p>
      ))}

      <h3>Class Average: {average.toFixed(2)}</h3>
      <h3>Highest Scorer: {highest.name} ({highest.marks})</h3>
    </div>
  );
}

export default App;