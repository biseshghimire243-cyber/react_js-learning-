function LaptopCard({ brand, model, price }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Price: Rs. {price}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <LaptopCard
                brand="Dell"
                model="Inspiron 15"
                price="85000"
            />

            <LaptopCard
                brand="HP"
                model="Pavilion"
                price="90000"
            />
        </div>
    );
}

export default App;