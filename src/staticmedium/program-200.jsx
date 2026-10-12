function CarRental({ car, pricePerDay, days }) {
  const total = pricePerDay * days;
  const discount = days >= 5 ? total * 0.1 : 0;
  const finalPrice = total - discount;

  return (
    <div>
      <h3>{car}</h3>
      <p>Price Per Day: Rs. {pricePerDay}</p>
      <p>Rental Duration: {days} days</p>
      <p>Original Price: Rs. {total}</p>
      <p>Discount: Rs. {discount}</p>
      <h4>Final Price: Rs. {finalPrice}</h4>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Car Rental Calculator</h1>
      <CarRental car="Toyota Corolla" pricePerDay={3500} days={3} />
      <CarRental car="Hyundai Creta" pricePerDay={4500} days={6} />
      <CarRental car="Suzuki Swift" pricePerDay={2500} days={2} />
    </div>
  );
}