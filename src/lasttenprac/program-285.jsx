function App() {
  const products = [
    { name: "Keyboard", stock: 12, price: 1500 },
    { name: "Mouse", stock: 4, price: 800 },
    { name: "Monitor", stock: 0, price: 18000 },
    { name: "Headphones", stock: 20, price: 2500 },
  ];

  const inventoryValue = products.reduce(
    (sum, product) => sum + product.stock * product.price,
    0
  );

  return (
    <div>
      <h1>Online Store Inventory</h1>

      {products.map((product) => (
        <div key={product.name}>
          <h3>{product.name}</h3>
          <p>Price: Rs. {product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>
            Status:{" "}
            {product.stock === 0
              ? "Out of Stock"
              : product.stock < 5
              ? "Low Stock"
              : "In Stock"}
          </p>
        </div>
      ))}

      <h2>Total Inventory Value: Rs. {inventoryValue}</h2>
    </div>
  );
}

export default App;