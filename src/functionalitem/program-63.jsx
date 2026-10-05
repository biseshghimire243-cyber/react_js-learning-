function ServiceCard({ name, price, popular }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>

            {popular && <p>⭐ Popular Service</p>}
        </div>
    );
}

function App() {
    const services = [
        {
            id: 1,
            name: "Website Development",
            price: 25000,
            popular: true
        },
        {
            id: 2,
            name: "Logo Design",
            price: 5000,
            popular: false
        },
        {
            id: 3,
            name: "UI/UX Design",
            price: 12000,
            popular: true
        }
    ];

    return (
        <div>
            <h1>Our Services</h1>

            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    name={service.name}
                    price={service.price}
                    popular={service.popular}
                />
            ))}
        </div>
    );
}

export default App;