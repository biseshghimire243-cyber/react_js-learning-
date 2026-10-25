function App() {
  const cart = [
    { name: "Keyboard", price: 1500, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Headphones", price: 2000, quantity: 1 },
  ];

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Shopping Cart</h1>

      {cart.map((item, index) => (
        <p key={index}>
          {item.name} — Rs. {item.price} × {item.quantity} = Rs.{" "}
          {item.price * item.quantity}
        </p>
      ))}

      <h2>Total: Rs. {total}</h2>
    </div>
  );
}

export default App;