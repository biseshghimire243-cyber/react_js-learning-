function App() {
  const phones = [
    { name: "Phone A", price: 25000, storage: "128GB", ram: "8GB" },
    { name: "Phone B", price: 35000, storage: "256GB", ram: "12GB" },
    { name: "Phone C", price: 18000, storage: "128GB", ram: "6GB" },
  ];

  return (
    <div>
      <h1>Mobile Phone Comparison</h1>

      {phones.map((phone) => (
        <div key={phone.name}>
          <h2>{phone.name}</h2>
          <p>Price: Rs. {phone.price}</p>
          <p>Storage: {phone.storage}</p>
          <p>RAM: {phone.ram}</p>
          <hr />
        </div>
      ))}

      <h3>
        Cheapest Phone:{" "}
        {phones.reduce((cheapest, phone) =>
          phone.price < cheapest.price ? phone : cheapest
        ).name}
      </h3>
    </div>
  );
}

export default App;