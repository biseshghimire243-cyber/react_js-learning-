function UniversityCard({ university }) {
  return (
    <div>
      <h2>{university.name}</h2>
      <p>City: {university.address.city}</p>
      <p>Country: {university.address.country}</p>
      <p>Faculty: {university.faculty.name}</p>
      <p>Students: {university.faculty.students}</p>
    </div>
  );
}

function App() {
  const university = {
    name: "Himalayan University",
    address: {
      city: "Pokhara",
      country: "Nepal",
    },
    faculty: {
      name: "Computer Science",
      students: 350,
    },
  };

  return (
    <div>
      <h1>University Information</h1>
      <UniversityCard university={university} />
    </div>
  );
}

export default App;