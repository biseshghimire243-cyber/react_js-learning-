function Order({ orderId, customer, amount, status }) {
  return (
    <div>
      <h3>Order #{orderId}</h3>
      <p>Customer: {customer}</p>
      <p>Amount: Rs. {amount}</p>
      <p>Status: {status}</p>
      <p>
        {status === "Delivered"
          ? "Your order has arrived."
          : status === "Shipped"
          ? "Your order is on its way."
          : status === "Cancelled"
          ? "This order was cancelled."
          : "Your order is being prepared."}
      </p>
    </div>
  );
}

export default function App() {
  const orders = [
    { id: 1, orderId: "ORD101", customer: "Aarav", amount: 2500, status: "Delivered" },
    { id: 2, orderId: "ORD102", customer: "Sita", amount: 1800, status: "Shipped" },
    { id: 3, orderId: "ORD103", customer: "Rohan", amount: 3200, status: "Processing" },
    { id: 4, orderId: "ORD104", customer: "Mina", amount: 900, status: "Cancelled" },
  ];

  return (
    <div>
      <h1>Online Order Tracking</h1>
      {orders.map((order) => (
        <Order key={order.id} {...order} />
      ))}
    </div>
  );
}