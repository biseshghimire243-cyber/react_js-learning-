function App() {
  const students = [
    { name: "Ram", marks: 78 },
    { name: "Sita", marks: 92 },
    { name: "Hari", marks: 35 },
    { name: "Gita", marks: 65 },
    { name: "Amit", marks: 88 },
  ];

  const totalMarks = students.reduce(
    (sum, student) => sum + student.marks,
    0
  );

  const average = totalMarks / students.length;
  const passed = students.filter((student) => student.marks >= 40);
  const failed = students.filter((student) => student.marks < 40);

  return (
    <div>
      <h1>School Examination Statistics</h1>

      {students.map((student) => (
        <p key={student.name}>
          {student.name}: {student.marks} marks —{" "}
          {student.marks >= 40 ? "Pass" : "Fail"}
        </p>
      ))}

      <h3>Class Average: {average.toFixed(2)}</h3>
      <h3>Passed Students: {passed.length}</h3>
      <h3>Failed Students: {failed.length}</h3>
    </div>
  );
}

export default App;