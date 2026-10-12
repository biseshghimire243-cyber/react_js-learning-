function Product({ name, stock, price }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
      <p>Available Stock: {stock}</p>
      <p>
        {stock === 0
          ? "Out of Stock"
          : stock <= 5
          ? "Low Stock"
          : "In Stock"}
      </p>
      <p>Total Stock Value: Rs. {stock * price}</p>
    </div>
  );
}

export default function App() {
  const products = [
    { id: 1, name: "Keyboard", stock: 12, price: 1500 },
    { id: 2, name: "Mouse", stock: 3, price: 800 },
    { id: 3, name: "Headphones", stock: 0, price: 2200 },
    { id: 4, name: "Monitor", stock: 7, price: 18000 },
  ];

  return (
    <div>
      <h1>Product Stock Manager</h1>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}