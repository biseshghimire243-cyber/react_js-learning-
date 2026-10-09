function FoodCard({ name, price, category, spicy }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: Rs. {price}</p>

            {spicy && <p>🌶️ Spicy Food</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <FoodCard
                name="Momo"
                price={180}
                category="Nepali"
                spicy={true}
            />

            <FoodCard
                name="Pizza"
                price={450}
                category="Italian"
                spicy={false}
            />
        </div>
    );
}

export default App;