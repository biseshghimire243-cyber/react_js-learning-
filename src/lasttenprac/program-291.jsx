function App() {
  const laptops = [
    { name: "Laptop A", ram: 8, storage: 256, price: 55000 },
    { name: "Laptop B", ram: 16, storage: 512, price: 80000 },
    { name: "Laptop C", ram: 32, storage: 1024, price: 120000 },
  ];

  const cheapest = laptops.reduce((best, laptop) =>
    laptop.price < best.price ? laptop : best
  );

  return (
    <div>
      <h1>Laptop Specification Comparison</h1>

      {laptops.map((laptop) => (
        <div key={laptop.name}>
          <h3>{laptop.name}</h3>
          <p>RAM: {laptop.ram} GB</p>
          <p>Storage: {laptop.storage} GB</p>
          <p>Price: Rs. {laptop.price}</p>
        </div>
      ))}

      <h2>Lowest-Priced Laptop: {cheapest.name}</h2>
      <p>Price: Rs. {cheapest.price}</p>
    </div>
  );
}

export default App;