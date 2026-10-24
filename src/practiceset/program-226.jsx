function HotelGuest({ name, roomType, nights, rate }) {
  const total = nights * rate;
  const serviceCharge = total * 0.1;
  const finalBill = total + serviceCharge;

  return (
    <div>
      <h3>Guest: {name}</h3>
      <p>Room Type: {roomType}</p>
      <p>Nights Stayed: {nights}</p>
      <p>Rate Per Night: Rs. {rate}</p>
      <p>Room Cost: Rs. {total}</p>
      <p>Service Charge: Rs. {serviceCharge.toFixed(2)}</p>
      <h4>Final Bill: Rs. {finalBill.toFixed(2)}</h4>
    </div>
  );
}

export default function App() {
  const guests = [
    { id: 1, name: "Aarav", roomType: "Standard", nights: 2, rate: 2000 },
    { id: 2, name: "Sita", roomType: "Deluxe", nights: 3, rate: 4000 },
    { id: 3, name: "Rohan", roomType: "Suite", nights: 1, rate: 6000 },
  ];

  return (
    <div>
      <h1>Hotel Guest Summary</h1>
      {guests.map((guest) => (
        <HotelGuest key={guest.id} {...guest} />
      ))}
    </div>
  );
}