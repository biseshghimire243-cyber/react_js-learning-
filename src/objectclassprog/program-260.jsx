function App() {
  const groceries = [
    { name: "Rice", price: 80, quantity: 5 },
    { name: "Sugar", price: 100, quantity: 2 },
    { name: "Milk", price: 90, quantity: 3 },
    { name: "Apples", price: 180, quantity: 2 },
  ];

  const total = groceries.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Grocery Shopping Calculator</h1>

      {groceries.map((item) => (
        <p key={item.name}>
          {item.name}: Rs. {item.price} × {item.quantity} = Rs.{" "}
          {item.price * item.quantity}
        </p>
      ))}

      <h2>Total Grocery Bill: Rs. {total}</h2>
    </div>
  );
}

export default App;