function Laptop({ brand, model, price, ram, storage }) {
  return (
    <div>
      <h3>{brand} {model}</h3>
      <p>RAM: {ram} GB</p>
      <p>Storage: {storage} GB</p>
      <p>Price: Rs. {price.toLocaleString()}</p>
      <p>
        {price < 60000
          ? "Budget Laptop"
          : price < 100000
          ? "Mid-Range Laptop"
          : "Premium Laptop"}
      </p>
    </div>
  );
}

export default function App() {
  const laptops = [
    { id: 1, brand: "Dell", model: "Inspiron", price: 55000, ram: 8, storage: 512 },
    { id: 2, brand: "Lenovo", model: "IdeaPad", price: 75000, ram: 16, storage: 512 },
    { id: 3, brand: "Apple", model: "MacBook Air", price: 145000, ram: 16, storage: 512 },
  ];

  return (
    <div>
      <h1>Laptop Price Comparison</h1>
      {laptops.map((laptop) => (
        <Laptop key={laptop.id} {...laptop} />
      ))}
    </div>
  );
}