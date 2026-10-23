function DataUsage({ user, dataLimit, dataUsed }) {
  const remaining = Math.max(dataLimit - dataUsed, 0);
  const usagePercentage = (dataUsed / dataLimit) * 100;

  return (
    <div>
      <h3>User: {user}</h3>
      <p>Monthly Data Limit: {dataLimit} GB</p>
      <p>Data Used: {dataUsed} GB</p>
      <p>Remaining Data: {remaining} GB</p>
      <p>Usage: {usagePercentage.toFixed(1)}%</p>

      <p>
        {dataUsed > dataLimit
          ? "Data Limit Exceeded"
          : usagePercentage >= 80
          ? "Warning: Data Almost Finished"
          : "Data Usage Normal"}
      </p>
    </div>
  );
}

export default function App() {
  const users = [
    { id: 1, user: "Aarav", dataLimit: 100, dataUsed: 45 },
    { id: 2, user: "Sita", dataLimit: 50, dataUsed: 44 },
    { id: 3, user: "Rohan", dataLimit: 30, dataUsed: 35 },
  ];

  return (
    <div>
      <h1>Internet Data Usage Calculator</h1>
      {users.map((user) => (
        <DataUsage key={user.id} {...user} />
      ))}
    </div>
  );
}