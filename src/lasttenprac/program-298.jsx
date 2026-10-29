function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NP", {
    style: "currency",
    currency: "NPR",
    maximumFractionDigits: 2,
  }).format(amount);
}

function App() {
  const receipt = {
    customer: "Bishal",
    items: [
      { name: "Notebook", quantity: 3, price: 100 },
      { name: "Pen", quantity: 5, price: 25 },
      { name: "Bag", quantity: 1, price: 1200 },
    ],
  };

  const subtotal = receipt.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div>
      <h1>Shopping Receipt</h1>
      <p>Customer: {receipt.customer}</p>

      {receipt.items.map(({ name, quantity, price }) => (
        <p key={name}>
          {name}: {quantity} × {formatCurrency(price)} ={" "}
          {formatCurrency(quantity * price)}
        </p>
      ))}

      <h2>Subtotal: {formatCurrency(subtotal)}</h2>
    </div>
  );
}

export default App;