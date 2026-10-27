function App() {
  const memberships = [
    { plan: "Monthly", months: 1, monthlyFee: 2500 },
    { plan: "Quarterly", months: 3, monthlyFee: 2200 },
    { plan: "Half-Yearly", months: 6, monthlyFee: 2000 },
    { plan: "Yearly", months: 12, monthlyFee: 1800 },
  ];

  return (
    <div>
      <h1>Gym Membership Calculator</h1>

      {memberships.map((membership) => {
        const total = membership.months * membership.monthlyFee;

        return (
          <div key={membership.plan}>
            <h3>{membership.plan}</h3>
            <p>Duration: {membership.months} month(s)</p>
            <p>Monthly Fee: Rs. {membership.monthlyFee}</p>
            <p>Total Fee: Rs. {total}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;