function FoodCard({ name, price, category }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: Rs. {price}</p>
        </div>
    );
}

function App() {
    const foods = [
        {
            id: 1,
            name: "Momo",
            price: 150,
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
        },
        {
            id: 4,
            name: "Thukpa",
            price: 200,
            category: "Tibetan"
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