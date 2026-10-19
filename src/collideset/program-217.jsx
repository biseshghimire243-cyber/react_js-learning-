function TrekkingGear({ item, quantity, essential, packed }) {
  return (
    <div>
      <h3>{item}</h3>
      <p>Quantity Needed: {quantity}</p>
      <p>{essential ? "Essential Gear" : "Optional Gear"}</p>
      <p>{packed ? "Packed" : "Not Packed"}</p>
      {!packed && essential && <p>Reminder: Pack this item!</p>}
    </div>
  );
}

export default function App() {
  const gear = [
    { id: 1, item: "Hiking Boots", quantity: 1, essential: true, packed: true },
    { id: 2, item: "First Aid Kit", quantity: 1, essential: true, packed: false },
    { id: 3, item: "Camera", quantity: 1, essential: false, packed: false },
    { id: 4, item: "Water Bottle", quantity: 2, essential: true, packed: true },
  ];

  return (
    <div>
      <h1>Trekking Gear Checklist</h1>
      {gear.map((item) => (
        <TrekkingGear key={item.id} {...item} />
      ))}
    </div>
  );
}