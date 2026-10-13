function FoodOrder({ name, price, quantity }) {
  return (
    <div>
      <p>
        {name} × {quantity} = Rs. {price * quantity}
      </p>
    </div>
  );
}

export default function App() {
  const orders = [
    { id: 1, name: "Veg Momo", price: 150, quantity: 2 },
    { id: 2, name: "Chowmein", price: 180, quantity: 1 },
    { id: 3, name: "Cold Drink", price: 80, quantity: 2 },
  ];

  const subtotal = orders.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const serviceCharge = subtotal * 0.1;
  const total = subtotal + serviceCharge;

  return (
    <div>
      <h1>Restaurant Bill</h1>
      {orders.map((item) => (
        <FoodOrder key={item.id} {...item} />
      ))}
      <p>Subtotal: Rs. {subtotal}</p>
      <p>Service Charge (10%): Rs. {serviceCharge.toFixed(2)}</p>
      <h2>Total: Rs. {total.toFixed(2)}</h2>
    </div>
  );
}