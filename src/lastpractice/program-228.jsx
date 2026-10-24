function InventoryItem({ name, openingStock, received, sold }) {
  const availableStock = openingStock + received - sold;

  return (
    <div>
      <h3>{name}</h3>
      <p>Opening Stock: {openingStock}</p>
      <p>Stock Received: {received}</p>
      <p>Items Sold: {sold}</p>
      <p>Available Stock: {availableStock}</p>
      <p>
        {availableStock <= 0
          ? "Stock Finished"
          : availableStock < 10
          ? "Restock Soon"
          : "Stock Sufficient"}
      </p>
    </div>
  );
}

export default function App() {
  const inventory = [
    { id: 1, name: "Laptop", openingStock: 20, received: 5, sold: 18 },
    { id: 2, name: "Keyboard", openingStock: 15, received: 0, sold: 9 },
    { id: 3, name: "Mouse", openingStock: 10, received: 5, sold: 15 },
  ];

  return (
    <div>
      <h1>Warehouse Inventory Report</h1>
      {inventory.map((item) => (
        <InventoryItem key={item.id} {...item} />
      ))}
    </div>
  );
}