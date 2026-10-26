function App() {
  const orders = [
    { item: "Bread", price: 60, quantity: 3 },
    { item: "Cake", price: 800, quantity: 1 },
    { item: "Cookies", price: 250, quantity: 2 },
    { item: "Donuts", price: 100, quantity: 4 },
  ];

  const subtotal = orders.reduce(
    (sum, order) => sum + order.price * order.quantity,
    0
  );

  const discount = subtotal >= 1500 ? subtotal * 0.1 : 0;
  const finalTotal = subtotal - discount;

  return (
    <div>
      <h1>Bakery Order Summary</h1>

      {orders.map((order) => (
        <p key={order.item}>
          {order.item}: Rs. {order.price} × {order.quantity} = Rs.{" "}
          {order.price * order.quantity}
        </p>
      ))}

      <h3>Subtotal: Rs. {subtotal}</h3>
      <h3>Discount: Rs. {discount}</h3>
      <h2>Final Total: Rs. {finalTotal}</h2>
    </div>
  );
}

export default App;