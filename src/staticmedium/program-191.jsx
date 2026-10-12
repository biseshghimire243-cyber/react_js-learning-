function FoodItem({ name, price, vegetarian }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: Rs. {price}</p>
      <p>{vegetarian ? "Vegetarian" : "Non-Vegetarian"}</p>
    </div>
  );
}

export default function App() {
  const foods = [
    { id: 1, name: "Veg Momo", price: 150, vegetarian: true },
    { id: 2, name: "Chicken Chowmein", price: 220, vegetarian: false },
    { id: 3, name: "Paneer Pizza", price: 350, vegetarian: true },
    { id: 4, name: "Chicken Burger", price: 280, vegetarian: false },
  ];

  return (
    <div>
      <h1>Online Food Menu</h1>
      {foods.map((food) => (
        <FoodItem key={food.id} {...food} />
      ))}
    </div>
  );
}