function FoodCard({ name, category, price, spicy }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: Rs. {price}</p>

            {spicy ? (
                <p>🌶️ Spicy Food</p>
            ) : (
                <p>Not Spicy</p>
            )}
        </div>
    );
}

function App() {
    const foods = [
        {
            id: 1,
            name: "Momo",
            category: "Nepali",
            price: 150,
            spicy: true
        },
        {
            id: 2,
            name: "Pizza",
            category: "Italian",
            price: 450,
            spicy: false
        },
        {
            id: 3,
            name: "Thukpa",
            category: "Tibetan",
            price: 200,
            spicy: true
        }
    ];

    return (
        <div>
            <h1>Food Menu</h1>

            {foods.map((food) => (
                <FoodCard
                    key={food.id}
                    name={food.name}
                    category={food.category}
                    price={food.price}
                    spicy={food.spicy}
                />
            ))}
        </div>
    );
}

export default App;