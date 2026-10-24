function RechargePlan({ name, price, data, validity }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
      <p>Internet Data: {data} GB</p>
      <p>Validity: {validity} days</p>
      <p>Cost Per Day: Rs. {(price / validity).toFixed(2)}</p>
      <p>{data >= 20 ? "Heavy Data Plan" : "Regular Data Plan"}</p>
    </div>
  );
}

export default function App() {
  const plans = [
    { id: 1, name: "Basic Pack", price: 199, data: 5, validity: 7 },
    { id: 2, name: "Weekly Pack", price: 299, data: 15, validity: 7 },
    { id: 3, name: "Monthly Pack", price: 999, data: 40, validity: 30 },
  ];

  return (
    <div>
      <h1>Mobile Recharge Plans</h1>
      {plans.map((plan) => (
        <RechargePlan key={plan.id} {...plan} />
      ))}
    </div>
  );
}