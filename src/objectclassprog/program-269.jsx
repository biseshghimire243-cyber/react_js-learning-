function App() {
  const passengers = [
    { name: "Aarav", distance: 50 },
    { name: "Sita", distance: 120 },
    { name: "Rohan", distance: 200 },
  ];

  const ratePerKm = 3;

  return (
    <div>
      <h1>Bus Ticket Fare Calculator</h1>

      {passengers.map((passenger) => {
        const fare = passenger.distance * ratePerKm;

        return (
          <div key={passenger.name}>
            <h3>{passenger.name}</h3>
            <p>Distance: {passenger.distance} km</p>
            <p>Rate: Rs. {ratePerKm} per km</p>
            <p>Ticket Fare: Rs. {fare}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;