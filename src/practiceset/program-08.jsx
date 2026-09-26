// program-08.jsx

function ProductCard({ name, price, category }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>
            <p>Category: {category}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <ProductCard
                name="Laptop"
                price={85000}
                category="Electronics"
            />

            <ProductCard
                name="Headphones"
                price={3500}
                category="Accessories"
            />
        </div>
    );
}

export default App;