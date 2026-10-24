function RestaurantTable({ tableNumber, capacity, guests, reserved }) {
  const remainingSeats = capacity - guests;

  return (
    <div>
      <h3>Table {tableNumber}</h3>
      <p>Table Capacity: {capacity} people</p>
      <p>Current Guests: {guests}</p>
      <p>Remaining Seats: {remainingSeats}</p>
      <p>{reserved ? "Table Reserved" : "Not Reserved"}</p>
      <p>
        {reserved
          ? "This table has a booking."
          : remainingSeats > 0
          ? "Table Available for Guests"
          : "Table Is Full"}
      </p>
    </div>
  );
}

export default function App() {
  const tables = [
    { id: 1, tableNumber: 1, capacity: 4, guests: 2, reserved: true },
    { id: 2, tableNumber: 2, capacity: 6, guests: 6, reserved: false },
    { id: 3, tableNumber: 3, capacity: 2, guests: 0, reserved: false },
    { id: 4, tableNumber: 4, capacity: 8, guests: 5, reserved: true },
  ];

  return (
    <div>
      <h1>Restaurant Table Availability</h1>
      {tables.map((table) => (
        <RestaurantTable key={table.id} {...table} />
      ))}
    </div>
  );
}