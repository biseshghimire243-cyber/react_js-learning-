function Student({ name, marks }) {
  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const percentage = total / marks.length;

  let grade = "F";

  if (percentage >= 80) grade = "A";
  else if (percentage >= 60) grade = "B";
  else if (percentage >= 40) grade = "C";

  return (
    <div>
      <h3>{name}</h3>
      <p>Total Marks: {total}</p>
      <p>Percentage: {percentage.toFixed(2)}%</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Student Grade Report</h1>
      <Student name="Aarav" marks={[85, 78, 92, 88, 81]} />
      <Student name="Sita" marks={[65, 70, 58, 72, 68]} />
      <Student name="Rohan" marks={[35, 42, 30, 38, 40]} />
    </div>
  );
}