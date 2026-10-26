function App() {
  const rentals = [
    { vehicle: "Scooter", dailyRate: 1200, days: 3 },
    { vehicle: "Car", dailyRate: 4000, days: 2 },
    { vehicle: "Jeep", dailyRate: 6000, days: 4 },
  ];

  return (
    <div>
      <h1>Vehicle Rental Calculator</h1>

      {rentals.map((rental) => {
        const total = rental.dailyRate * rental.days;

        return (
          <div key={rental.vehicle}>
            <h3>{rental.vehicle}</h3>
            <p>Daily Rate: Rs. {rental.dailyRate}</p>
            <p>Rental Days: {rental.days}</p>
            <p>Total Cost: Rs. {total}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;