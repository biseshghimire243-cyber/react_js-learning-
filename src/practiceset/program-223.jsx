function Attendance({ name, totalClasses, attended }) {
  const percentage = (attended / totalClasses) * 100;
  const missed = totalClasses - attended;

  return (
    <div>
      <h3>{name}</h3>
      <p>Total Classes: {totalClasses}</p>
      <p>Classes Attended: {attended}</p>
      <p>Classes Missed: {missed}</p>
      <p>Attendance: {percentage.toFixed(1)}%</p>
      <p>
        {percentage >= 80
          ? "Attendance Satisfactory"
          : "Attendance Below Requirement"}
      </p>
    </div>
  );
}

export default function App() {
  const students = [
    { id: 1, name: "Aarav", totalClasses: 50, attended: 46 },
    { id: 2, name: "Sita", totalClasses: 50, attended: 38 },
    { id: 3, name: "Rohan", totalClasses: 50, attended: 30 },
  ];

  return (
    <div>
      <h1>Student Attendance Analyzer</h1>
      {students.map((student) => (
        <Attendance key={student.id} {...student} />
      ))}
    </div>
  );
}