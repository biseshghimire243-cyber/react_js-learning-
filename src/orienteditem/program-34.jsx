function FoodCard({ name, price, category }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>
            <p>Category: {category}</p>
        </div>
    );
}

function App() {
    const foods = [
        {
            id: 1,
            name: "Momo",
            price: 180,
            category: "Nepali"
        },
        {
            id: 2,
            name: "Pizza",
            price: 450,
            category: "Italian"
        },
        {
            id: 3,
            name: "Burger",
            price: 300,
            category: "Fast Food"
        }
    ];

    return (
        <div>
            <h1>Food Menu</h1>

            {foods.map((food) => (
                <FoodCard
                    key={food.id}
                    name={food.name}
                    price={food.price}
                    category={food.category}
                />
            ))}
        </div>
    );
}

export default App;