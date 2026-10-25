function App() {
  const cities = [
    { name: "Kathmandu", temperature: 24, condition: "Sunny" },
    { name: "Pokhara", temperature: 21, condition: "Cloudy" },
    { name: "Biratnagar", temperature: 30, condition: "Hot" },
    { name: "Dharan", temperature: 26, condition: "Rainy" },
  ];

  return (
    <div>
      <h1>Weather Dashboard</h1>

      {cities.map((city) => (
        <div key={city.name}>
          <h2>{city.name}</h2>
          <p>Temperature: {city.temperature}°C</p>
          <p>Condition: {city.condition}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;