function RestaurantCard({ name, location, cuisine }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Cuisine: {cuisine}</p>
        </div>
    );
}

function App() {
    const restaurants = [
        {
            id: 1,
            name: "Himalayan Cafe",
            location: "Kathmandu",
            cuisine: "Nepali"
        },
        {
            id: 2,
            name: "Italian House",
            location: "Pokhara",
            cuisine: "Italian"
        },
        {
            id: 3,
            name: "Spice Garden",
            location: "Lalitpur",
            cuisine: "Indian"
        }
    ];

    return (
        <div>
            {restaurants.map((restaurant) => (
                <RestaurantCard
                    key={restaurant.id}
                    name={restaurant.name}
                    location={restaurant.location}
                    cuisine={restaurant.cuisine}
                />
            ))}
        </div>
    );
}

export default App;