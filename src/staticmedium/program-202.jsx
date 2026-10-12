function ShoppingItem({ name, price, quantity }) {
  const subtotal = price * quantity;
  const discount = subtotal >= 5000 ? subtotal * 0.15 : subtotal * 0.05;
  const finalAmount = subtotal - discount;

  return (
    <div>
      <h3>{name}</h3>
      <p>Unit Price: Rs. {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Subtotal: Rs. {subtotal}</p>
      <p>Discount: Rs. {discount}</p>
      <h4>Final Amount: Rs. {finalAmount}</h4>
    </div>
  );
}

export default function App() {
  const items = [
    { id: 1, name: "Laptop", price: 60000, quantity: 1 },
    { id: 2, name: "T-Shirt", price: 800, quantity: 3 },
    { id: 3, name: "Headphones", price: 2500, quantity: 2 },
  ];

  return (
    <div>
      <h1>Shopping Discount Calculator</h1>
      {items.map((item) => (
        <ShoppingItem key={item.id} {...item} />
      ))}
    </div>
  );
}