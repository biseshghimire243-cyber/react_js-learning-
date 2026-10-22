function ElectricityBill({ customer, units }) {
  let bill = 0;

  if (units <= 20) {
    bill = units * 5;
  } else if (units <= 50) {
    bill = 20 * 5 + (units - 20) * 7;
  } else {
    bill = 20 * 5 + 30 * 7 + (units - 50) * 10;
  }

  return (
    <div>
      <h3>{customer}</h3>
      <p>Units Consumed: {units}</p>
      <p>Electricity Charge: Rs. {bill}</p>
      <p>{units > 100 ? "High Consumption" : "Normal Consumption"}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Electricity Bill Calculator</h1>
      <ElectricityBill customer="Ram" units={15} />
      <ElectricityBill customer="Sita" units={45} />
      <ElectricityBill customer="Hari" units={120} />
    </div>
  );
}