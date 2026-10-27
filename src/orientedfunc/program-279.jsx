function App() {
  const packages = [
    { name: "Basic", data: 5, price: 150 },
    { name: "Standard", data: 15, price: 350 },
    { name: "Premium", data: 30, price: 600 },
    { name: "Ultra", data: 50, price: 900 },
  ];

  return (
    <div>
      <h1>Mobile Data Package Comparison</h1>

      {packages.map((pack) => (
        <div key={pack.name}>
          <h3>{pack.name}</h3>
          <p>Data: {pack.data} GB</p>
          <p>Price: Rs. {pack.price}</p>
          <p>Cost per GB: Rs. {(pack.price / pack.data).toFixed(2)}</p>
        </div>
      ))}

      <h3>
        Lowest Cost per GB:{" "}
        {
          [...packages].sort(
            (a, b) => a.price / a.data - b.price / b.data
          )[0].name
        }
      </h3>
    </div>
  );
}

export default App;