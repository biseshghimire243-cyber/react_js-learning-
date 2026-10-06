function RestaurantCard({ name, cuisine, rating, open }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Cuisine: {cuisine}</p>
            <p>Rating: ⭐ {rating}</p>

            {open ? (
                <p>🟢 Open Now</p>
            ) : (
                <p>🔴 Closed</p>
            )}
        </div>
    );
}

function App() {
    const restaurants = [
        {
            id: 1,
            name: "Momo House",
            cuisine: "Nepali",
            rating: 4.8,
            open: true
        },
        {
            id: 2,
            name: "Pizza Corner",
            cuisine: "Italian",
            rating: 4.5,
            open: false
        },
        {
            id: 3,
            name: "Thakali Kitchen",
            cuisine: "Thakali",
            rating: 4.9,
            open: true
        }
    ];

    return (
        <div>
            <h1>Restaurants</h1>

            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    rating={restaurant.rating}
                    open={restaurant.open}
                />
            ))}
        </div>
    );
}

export default App;