function RestaurantCard({ name, cuisine, rating }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Cuisine: {cuisine}</p>
            <p>Rating: {rating}/5</p>

            {rating >= 4.5 && <p>Highly Rated Restaurant</p>}
        </div>
    );
}

function App() {
    const restaurants = [
        {
            id: 1,
            name: "Momo House",
            cuisine: "Nepali",
            rating: 4.7
        },
        {
            id: 2,
            name: "Pizza Corner",
            cuisine: "Italian",
            rating: 4.2
        },
        {
            id: 3,
            name: "Spice Hub",
            cuisine: "Indian",
            rating: 4.6
        }
    ];

    return (
        <div>
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