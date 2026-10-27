function App() {
  const products = [
    { name: "T-Shirt", price: 800, quantity: 2 },
    { name: "Jeans", price: 1800, quantity: 1 },
    { name: "Shoes", price: 2500, quantity: 1 },
  ];

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  return (
    <div>
      <h1>Online Shopping Invoice</h1>

      {products.map((product) => (
        <p key={product.name}>
          {product.name}: Rs. {product.price} × {product.quantity} = Rs.{" "}
          {product.price * product.quantity}
        </p>
      ))}

      <hr />
      <p>Subtotal: Rs. {subtotal.toFixed(2)}</p>
      <p>Example Tax (13%): Rs. {tax.toFixed(2)}</p>
      <h2>Total: Rs. {total.toFixed(2)}</h2>
    </div>
  );
}

export default App;