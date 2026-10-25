function App() {
  const menu = [
    { name: "Momo", price: 150, category: "Snacks" },
    { name: "Chowmein", price: 180, category: "Main Course" },
    { name: "Dal Bhat", price: 250, category: "Main Course" },
    { name: "Milk Tea", price: 40, category: "Drinks" },
    { name: "Lassi", price: 100, category: "Drinks" },
  ];

  return (
    <div>
      <h1>Restaurant Menu</h1>

      {menu.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Price: Rs. {item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;