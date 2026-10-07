function RestaurantCard({ name, cuisine, rating }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Cuisine: {cuisine}</p>
            <p>Rating: {rating}</p>

            {rating >= 4.5 && <p>Highly Rated Restaurant</p>}
        </div>
    );
}

function App() {
    const restaurants = [
        { id: 1, name: "Momo House", cuisine: "Nepali", rating: 4.8 },
        { id: 2, name: "Pizza Point", cuisine: "Italian", rating: 4.2 },
        { id: 3, name: "Thakali Kitchen", cuisine: "Thakali", rating: 4.7 }
    ];

    return (
        <div>
            <h1>Restaurant List</h1>

            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    cuisine={restaurant.cuisine}
                    rating={restaurant.rating}
                />
            ))}
        </div>
    );
}

export default App;