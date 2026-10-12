function CourseResult({ subject, marks }) {
  let result = "Fail";

  if (marks >= 80) result = "Distinction";
  else if (marks >= 60) result = "First Division";
  else if (marks >= 45) result = "Second Division";
  else if (marks >= 35) result = "Pass";

  return (
    <div>
      <h3>{subject}</h3>
      <p>Marks: {marks}/100</p>
      <p>Result: {result}</p>
    </div>
  );
}

export default function App() {
  const results = [
    { id: 1, subject: "Computer Networks", marks: 85 },
    { id: 2, subject: "Database Systems", marks: 72 },
    { id: 3, subject: "Operating Systems", marks: 51 },
    { id: 4, subject: "Mathematics", marks: 28 },
  ];

  return (
    <div>
      <h1>University Course Results</h1>
      {results.map((result) => (
        <CourseResult key={result.id} {...result} />
      ))}
    </div>
  );
}