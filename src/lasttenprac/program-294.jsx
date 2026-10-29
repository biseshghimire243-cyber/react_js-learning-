function ProductDetails({ product }) {
  const { name, brand, price, inStock } = product;

  return (
    <div>
      <h2>{name}</h2>
      <p>Brand: {brand}</p>
      <p>Price: Rs. {price}</p>
      <p>Status: {inStock ? "Available" : "Unavailable"}</p>
    </div>
  );
}

function App() {
  const product = {
    name: "Wireless Mouse",
    brand: "Logitech",
    price: 1800,
    inStock: true,
  };

  return (
    <div>
      <h1>Product Information</h1>
      <ProductDetails product={product} />
    </div>
  );
}

export default App;