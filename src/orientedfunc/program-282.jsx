function App() {
  const applicants = [
    { name: "Anisha", percentage: 85, entranceScore: 78 },
    { name: "Rohan", percentage: 72, entranceScore: 88 },
    { name: "Suman", percentage: 90, entranceScore: 92 },
    { name: "Nisha", percentage: 65, entranceScore: 55 },
  ];

  return (
    <div>
      <h1>University Admission Eligibility</h1>

      {applicants.map((applicant) => {
        const eligible =
          applicant.percentage >= 70 && applicant.entranceScore >= 60;

        return (
          <div key={applicant.name}>
            <h3>{applicant.name}</h3>
            <p>Academic Percentage: {applicant.percentage}%</p>
            <p>Entrance Score: {applicant.entranceScore}</p>
            <p>
              Admission Status: {eligible ? "Eligible" : "Not Eligible"}
            </p>
          </div>
        );
      })}

      <p>Note: Eligibility criteria are examples for practice.</p>
    </div>
  );
}

export default App;