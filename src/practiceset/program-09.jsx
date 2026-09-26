// program-09.jsx

function Product({ name, isAvailable }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>
                {isAvailable ? "Available" : "Out of Stock"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Product name="Laptop" isAvailable={true} />
            <Product name="Camera" isAvailable={false} />
        </div>
    );
}

export default App;