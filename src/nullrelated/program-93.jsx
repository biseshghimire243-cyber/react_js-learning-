function ServiceCard({ name, price, category }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: Rs. {price}</p>

            {price <= 5000 ? (
                <p>Affordable Service</p>
            ) : (
                <p>Premium Service</p>
            )}
        </div>
    );
}

function App() {
    const services = [
        {
            id: 1,
            name: "Logo Design",
            price: 3000,
            category: "Design"
        },
        {
            id: 2,
            name: "Website Development",
            price: 30000,
            category: "Development"
        },
        {
            id: 3,
            name: "UI Design",
            price: 8000,
            category: "Design"
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
                    category={service.category}
                />
            ))}
        </div>
    );
}

export default App;