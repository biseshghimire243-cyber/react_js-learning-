function HotelCard({ name, location, price, rating }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Price per Night: Rs. {price}</p>
            <p>Rating: {rating}/5</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Hotels</h1>

            <HotelCard
                name="Mountain View Hotel"
                location="Pokhara"
                price={4500}
                rating={4.5}
            />

            <HotelCard
                name="City Hotel"
                location="Kathmandu"
                price={3500}
                rating={4.2}
            />
        </div>
    );
}

export default App;