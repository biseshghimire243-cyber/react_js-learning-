function ElectricityUsage({ household, previous, current }) {
  const units = current - previous;
  const estimatedBill = units * 8;

  return (
    <div>
      <h3>{household}</h3>
      <p>Previous Reading: {previous} units</p>
      <p>Current Reading: {current} units</p>
      <p>Units Consumed: {units}</p>
      <p>Estimated Bill: Rs. {estimatedBill}</p>
      <p>
        {units > 200
          ? "High Consumption"
          : units > 100
          ? "Moderate Consumption"
          : "Low Consumption"}
      </p>
    </div>
  );
}

export default function App() {
  const households = [
    { id: 1, household: "House A", previous: 1200, current: 1320 },
    { id: 2, household: "House B", previous: 800, current: 1040 },
    { id: 3, household: "House C", previous: 450, current: 520 },
  ];

  return (
    <div>
      <h1>Electricity Consumption Report</h1>
      {households.map((house) => (
        <ElectricityUsage key={house.id} {...house} />
      ))}
    </div>
  );
}