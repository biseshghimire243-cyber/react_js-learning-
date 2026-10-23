function GroceryItem({ name, price, quantity }) {
  const total = price * quantity;

  return (
    <div>
      <h3>{name}</h3>
      <p>Price per Unit: Rs. {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Total Cost: Rs. {total}</p>
    </div>
  );
}

export default function App() {
  const groceries = [
    { id: 1, name: "Rice", price: 80, quantity: 5 },
    { id: 2, name: "Apples", price: 180, quantity: 2 },
    { id: 3, name: "Milk", price: 100, quantity: 3 },
    { id: 4, name: "Bread", price: 60, quantity: 2 },
  ];

  const total = groceries.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Grocery Shopping List</h1>
      {groceries.map((item) => (
        <GroceryItem key={item.id} {...item} />
      ))}
      <h2>Grand Total: Rs. {total}</h2>
    </div>
  );
}