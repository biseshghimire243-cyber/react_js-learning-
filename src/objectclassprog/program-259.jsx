function App() {
  const students = [
    { name: "Aarav", correct: 45, total: 50 },
    { name: "Sita", correct: 38, total: 50 },
    { name: "Rohan", correct: 22, total: 50 },
    { name: "Nisha", correct: 49, total: 50 },
  ];

  return (
    <div>
      <h1>Online Exam Results</h1>

      {students.map((student) => {
        const percentage = (student.correct / student.total) * 100;

        return (
          <div key={student.name}>
            <h3>{student.name}</h3>
            <p>Correct Answers: {student.correct}</p>
            <p>Percentage: {percentage.toFixed(1)}%</p>
            <p>Result: {percentage >= 40 ? "Pass" : "Fail"}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;