function ShippingOrder({ customer, orderAmount, distance }) {
  const shippingCost = distance <= 10 ? 100 : distance <= 50 ? 250 : 500;
  const finalAmount = orderAmount + shippingCost;
  const freeShipping = orderAmount >= 5000;

  return (
    <div>
      <h3>{customer}</h3>
      <p>Order Amount: Rs. {orderAmount}</p>
      <p>Delivery Distance: {distance} km</p>
      <p>Shipping Cost: Rs. {freeShipping ? 0 : shippingCost}</p>
      <h4>Final Amount: Rs. {orderAmount + (freeShipping ? 0 : shippingCost)}</h4>
      <p>{freeShipping ? "Free Shipping Applied" : "Shipping Fee Applied"}</p>
    </div>
  );
}

export default function App() {
  const orders = [
    { id: 1, customer: "Aarav", orderAmount: 2500, distance: 8 },
    { id: 2, customer: "Sita", orderAmount: 6000, distance: 25 },
    { id: 3, customer: "Rohan", orderAmount: 4000, distance: 70 },
  ];

  return (
    <div>
      <h1>Online Store Shipping Calculator</h1>
      {orders.map((order) => (
        <ShippingOrder key={order.id} {...order} />
      ))}
    </div>
  );
}