function Weather({ city, temperature, condition }) {
  return (
    <div>
      <h3>{city}</h3>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
      <p>
        {temperature >= 35
          ? "Very hot weather"
          : temperature >= 25
          ? "Warm weather"
          : temperature >= 15
          ? "Pleasant weather"
          : "Cold weather"}
      </p>
    </div>
  );
}

export default function App() {
  const cities = [
    { id: 1, city: "Biratnagar", temperature: 36, condition: "Sunny" },
    { id: 2, city: "Pokhara", temperature: 24, condition: "Cloudy" },
    { id: 3, city: "Kathmandu", temperature: 17, condition: "Rainy" },
    { id: 4, city: "Jumla", temperature: 8, condition: "Cold" },
  ];

  return (
    <div>
      <h1>Weather Report</h1>
      {cities.map((item) => (
        <Weather key={item.id} {...item} />
      ))}
    </div>
  );
}