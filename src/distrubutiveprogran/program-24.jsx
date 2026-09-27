function RestaurantCard({ name, food, location }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Food: {food}</p>
            <p>Location: {location}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <RestaurantCard
                name="Food Corner"
                food="Pizza"
                location="Itahari"
            />

            <RestaurantCard
                name="Taste House"
                food="Momo"
                location="Kathmandu"
            />
        </div>
    );
}

export default App;