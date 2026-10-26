function App() {
  const apps = [
    { name: "YouTube", data: 5.5 },
    { name: "Instagram", data: 2.3 },
    { name: "Browser", data: 1.2 },
    { name: "Online Games", data: 3.0 },
  ];

  const totalData = apps.reduce((sum, app) => sum + app.data, 0);
  const monthlyLimit = 20;

  return (
    <div>
      <h1>Internet Data Usage Report</h1>

      {apps.map((app) => (
        <p key={app.name}>
          {app.name}: {app.data} GB
        </p>
      ))}

      <h3>Total Used: {totalData.toFixed(1)} GB</h3>
      <h3>Monthly Limit: {monthlyLimit} GB</h3>
      <h3>Remaining: {(monthlyLimit - totalData).toFixed(1)} GB</h3>
      <p>{totalData > monthlyLimit ? "Limit Exceeded" : "Within Limit"}</p>
    </div>
  );
}

export default App;