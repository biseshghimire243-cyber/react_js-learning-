function App() {
  const passengers = [
    { name: "Aarav", baseFare: 8000, baggageFee: 1000, discount: 10 },
    { name: "Sita", baseFare: 10000, baggageFee: 1500, discount: 5 },
    { name: "Rohan", baseFare: 7000, baggageFee: 500, discount: 0 },
  ];

  return (
    <div>
      <h1>Flight Ticket Price Calculator</h1>

      {passengers.map((passenger) => {
        const subtotal = passenger.baseFare + passenger.baggageFee;
        const discountAmount = (subtotal * passenger.discount) / 100;
        const finalPrice = subtotal - discountAmount;

        return (
          <div key={passenger.name}>
            <h3>Passenger: {passenger.name}</h3>
            <p>Base Fare: Rs. {passenger.baseFare}</p>
            <p>Baggage Fee: Rs. {passenger.baggageFee}</p>
            <p>Discount: {passenger.discount}%</p>
            <h4>Final Price: Rs. {finalPrice.toFixed(2)}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;