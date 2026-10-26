function App() {
  const hardware = [
    { name: "Processor", brand: "Intel", price: 25000 },
    { name: "RAM", brand: "Kingston", price: 6000 },
    { name: "SSD", brand: "Samsung", price: 9000 },
    { name: "Graphics Card", brand: "NVIDIA", price: 55000 },
  ];

  return (
    <div>
      <h1>Computer Hardware Catalog</h1>

      {hardware.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <p>Brand: {item.brand}</p>
          <p>Price: Rs. {item.price}</p>
          <p>
            Price Range:{" "}
            {item.price >= 30000
              ? "Premium"
              : item.price >= 10000
              ? "Mid-range"
              : "Budget"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;