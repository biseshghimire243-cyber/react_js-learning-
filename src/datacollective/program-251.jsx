function App() {
  const units = 180;
  let bill = 0;

  if (units <= 20) {
    bill = units * 4;
  } else if (units <= 50) {
    bill = 20 * 4 + (units - 20) * 7;
  } else {
    bill = 20 * 4 + 30 * 7 + (units - 50) * 8;
  }

  return (
    <div>
      <h1>Electricity Bill Calculator</h1>
      <p>Units Consumed: {units}</p>
      <p>Rate: Based on the example slab system</p>
      <h2>Estimated Bill: Rs. {bill}</h2>
      <p>This is a practice calculation, not an official tariff.</p>
    </div>
  );
}

export default App;