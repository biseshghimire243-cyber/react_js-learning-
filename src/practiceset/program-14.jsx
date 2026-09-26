// program-14.jsx

function Product({ name, price, stock }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>

            <p>
                {stock > 0 ? "Available" : "Out of Stock"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Product
                name="Laptop"
                price={85000}
                stock={5}
            />

            <Product
                name="Camera"
                price={55000}
                stock={0}
            />
        </div>
    );
}

export default App;