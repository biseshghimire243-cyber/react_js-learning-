function Membership({ type, monthlyFee, months, discount }) {
  const subtotal = monthlyFee * months;
  const discountAmount = subtotal * (discount / 100);
  const total = subtotal - discountAmount;

  return (
    <div>
      <h3>{type}</h3>
      <p>Monthly Fee: Rs. {monthlyFee}</p>
      <p>Duration: {months} months</p>
      <p>Discount: {discount}%</p>
      <p>Original Cost: Rs. {subtotal}</p>
      <h4>Final Cost: Rs. {total.toFixed(2)}</h4>
    </div>
  );
}

export default function App() {
  const plans = [
    { id: 1, type: "Basic", monthlyFee: 1500, months: 1, discount: 0 },
    { id: 2, type: "Standard", monthlyFee: 1500, months: 6, discount: 10 },
    { id: 3, type: "Premium", monthlyFee: 1500, months: 12, discount: 20 },
  ];

  return (
    <div>
      <h1>Gym Membership Plans</h1>
      {plans.map((plan) => (
        <Membership key={plan.id} {...plan} />
      ))}
    </div>
  );
}