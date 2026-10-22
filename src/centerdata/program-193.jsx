function TravelPackage({ destination, days, price, popular }) {
  return (
    <div>
      <h3>{destination}</h3>
      <p>Duration: {days} days</p>
      <p>Price: Rs. {price}</p>
      <p>{popular ? "Popular Package" : "Standard Package"}</p>
      <p>Daily Cost: Rs. {(price / days).toFixed(2)}</p>
    </div>
  );
}

export default function App() {
  const packages = [
    { id: 1, destination: "Pokhara", days: 3, price: 8000, popular: true },
    { id: 2, destination: "Chitwan", days: 2, price: 6000, popular: false },
    { id: 3, destination: "Mustang", days: 5, price: 18000, popular: true },
  ];

  return (
    <div>
      <h1>Nepal Travel Packages</h1>
      {packages.map((item) => (
        <TravelPackage key={item.id} {...item} />
      ))}
    </div>
  );
}