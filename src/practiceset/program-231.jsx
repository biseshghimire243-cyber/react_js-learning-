function DigitalProduct({ name, price, quantity, discount }) {
  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  const finalPrice = subtotal - discountAmount;

  return (
    <div>
      <h3>{name}</h3>
      <p>Unit Price: Rs. {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Subtotal: Rs. {subtotal}</p>
      <p>Discount: Rs. {discountAmount.toFixed(2)}</p>
      <h4>Final Price: Rs. {finalPrice.toFixed(2)}</h4>
    </div>
  );
}

export default function App() {
  const products = [
    { id: 1, name: "Website Template", price: 1500, quantity: 2, discount: 10 },
    { id: 2, name: "Programming Ebook", price: 800, quantity: 1, discount: 5 },
    { id: 3, name: "UI Design Kit", price: 2500, quantity: 3, discount: 15 },
  ];

  return (
    <div>
      <h1>Digital Product Price Calculator</h1>
      {products.map((product) => (
        <DigitalProduct key={product.id} {...product} />
      ))}
    </div>
  );
}