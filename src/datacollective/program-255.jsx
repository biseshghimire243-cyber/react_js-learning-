function App() {
  const departments = [
    { name: "Emergency", doctors: 8, patients: 24 },
    { name: "Cardiology", doctors: 5, patients: 16 },
    { name: "Pediatrics", doctors: 6, patients: 20 },
    { name: "Orthopedics", doctors: 4, patients: 12 },
  ];

  return (
    <div>
      <h1>Hospital Department Overview</h1>

      {departments.map((department) => (
        <div key={department.name}>
          <h2>{department.name}</h2>
          <p>Doctors: {department.doctors}</p>
          <p>Patients: {department.patients}</p>
          <p>
            Patient Load:{" "}
            {department.patients > 20
              ? "High"
              : department.patients >= 15
              ? "Medium"
              : "Low"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;