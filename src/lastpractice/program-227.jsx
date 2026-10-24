function StudentResult({ name, marks }) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  const passed = marks.every((mark) => mark >= 35);

  return (
    <div>
      <h3>{name}</h3>
      <p>Total Marks: {total}/{marks.length * 100}</p>
      <p>Average: {average.toFixed(2)}%</p>
      <p>Result: {passed ? "Pass" : "Fail"}</p>
      <p>
        {passed && average >= 80
          ? "Excellent Performance"
          : passed
          ? "Keep Improving"
          : "Needs Further Study"}
      </p>
    </div>
  );
}

export default function App() {
  const students = [
    { id: 1, name: "Aarav", marks: [85, 90, 78, 88, 92] },
    { id: 2, name: "Sita", marks: [65, 70, 55, 72, 68] },
    { id: 3, name: "Rohan", marks: [45, 30, 50, 38, 60] },
  ];

  return (
    <div>
      <h1>Exam Result Analyzer</h1>
      {students.map((student) => (
        <StudentResult key={student.id} {...student} />
      ))}
    </div>
  );
}