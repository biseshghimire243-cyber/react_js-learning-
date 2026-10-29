function App() {
  const statistics = {
    totalStudents: 450,
    totalTeachers: 32,
    totalCourses: 18,
    totalDepartments: 6,
  };

  return (
    <div>
      <h1>Education Dashboard</h1>

      {Object.entries(statistics).map(([label, value]) => (
        <div key={label}>
          <h3>
            {label
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (letter) => letter.toUpperCase())}
          </h3>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}

export default App;