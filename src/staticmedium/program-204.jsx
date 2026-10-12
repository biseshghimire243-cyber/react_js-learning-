function HotelRoom({ roomType, pricePerNight, nights, available }) {
  const total = pricePerNight * nights;

  return (
    <div>
      <h3>{roomType}</h3>
      <p>Price Per Night: Rs. {pricePerNight}</p>
      <p>Number of Nights: {nights}</p>
      <p>Total Cost: Rs. {total}</p>
      <p>{available ? "Room Available" : "Room Fully Booked"}</p>
      <p>
        {available
          ? `You can book this room for Rs. ${total}.`
          : "Please choose another room."}
      </p>
    </div>
  );
}

export default function App() {
  const rooms = [
    { id: 1, roomType: "Standard Room", pricePerNight: 2000, nights: 2, available: true },
    { id: 2, roomType: "Deluxe Room", pricePerNight: 4000, nights: 3, available: false },
    { id: 3, roomType: "Family Room", pricePerNight: 5500, nights: 2, available: true },
  ];

  return (
    <div>
      <h1>Hotel Room Booking</h1>
      {rooms.map((room) => (
        <HotelRoom key={room.id} {...room} />
      ))}
    </div>
  );
}