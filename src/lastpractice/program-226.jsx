function FuelCost({ vehicle, distance, mileage, fuelPrice }) {
  const fuelNeeded = distance / mileage;
  const totalCost = fuelNeeded * fuelPrice;

  return (
    <div>
      <h3>{vehicle}</h3>
      <p>Travel Distance: {distance} km</p>
      <p>Mileage: {mileage} km per litre</p>
      <p>Fuel Needed: {fuelNeeded.toFixed(2)} litres</p>
      <p>Fuel Price: Rs. {fuelPrice} per litre</p>
      <h4>Estimated Fuel Cost: Rs. {totalCost.toFixed(2)}</h4>
    </div>
  );
}

export default function App() {
  const vehicles = [
    { id: 1, vehicle: "Motorcycle", distance: 150, mileage: 40, fuelPrice: 160 },
    { id: 2, vehicle: "Car", distance: 300, mileage: 15, fuelPrice: 160 },
    { id: 3, vehicle: "Scooter", distance: 100, mileage: 45, fuelPrice: 160 },
  ];

  return (
    <div>
      <h1>Vehicle Fuel Cost Calculator</h1>
      {vehicles.map((vehicle) => (
        <FuelCost key={vehicle.id} {...vehicle} />
      ))}
    </div>
  );
}