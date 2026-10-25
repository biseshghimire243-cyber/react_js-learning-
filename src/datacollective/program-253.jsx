function App() {
  const destinations = [
    { name: "Pokhara", region: "Gandaki", activity: "Boating" },
    { name: "Ilam", region: "Koshi", activity: "Tea garden visits" },
    { name: "Lumbini", region: "Lumbini", activity: "Cultural tours" },
    { name: "Mustang", region: "Gandaki", activity: "Mountain trekking" },
  ];

  return (
    <div>
      <h1>Travel Destination Guide</h1>

      {destinations.map((place) => (
        <div key={place.name}>
          <h2>{place.name}</h2>
          <p>Region: {place.region}</p>
          <p>Popular Activity: {place.activity}</p>
        </div>
      ))}
    </div>
  );
}

export default App;