function App() {
  const students = [
    { name: "Aarav", marks: [80, 75, 90] },
    { name: "Anisha", marks: [65, 70, 60] },
    { name: "Rohan", marks: [35, 45, 30] },
  ];

  return (
    <div>
      <h1>Student Result Analyzer</h1>

      {students.map((student) => {
        const total = student.marks.reduce((sum, mark) => sum + mark, 0);
        const average = total / student.marks.length;

        return (
          <div key={student.name}>
            <h2>{student.name}</h2>
            <p>Total Marks: {total}</p>
            <p>Average: {average.toFixed(2)}</p>
            <p>Result: {student.marks.every((mark) => mark >= 40) ? "Pass" : "Fail"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;