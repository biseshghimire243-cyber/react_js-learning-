function App() {
  const students = [
    { name: "Ram", marks: 85 },
    { name: "Sita", marks: 92 },
    { name: "Hari", marks: 48 },
    { name: "Gita", marks: 67 },
  ];

  return (
    <div>
      <h1>Student Grade Report</h1>

      {students.map((student, index) => (
        <div key={index}>
          <h3>{student.name}</h3>
          <p>Marks: {student.marks}</p>
          <p>
            Grade:{" "}
            {student.marks >= 90
              ? "A+"
              : student.marks >= 80
              ? "A"
              : student.marks >= 60
              ? "B"
              : student.marks >= 40
              ? "C"
              : "Fail"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;