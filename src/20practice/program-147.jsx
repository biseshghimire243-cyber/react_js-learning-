function ServiceCard({ name, price, available }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>

            {available ? (
                <p>Service Available</p>
            ) : (
                <p>Service Unavailable</p>
            )}
        </div>
    );
}

function App() {
    const services = [
        {
            id: 1,
            name: "Website Development",
            price: 50000,
            available: true
        },
        {
            id: 2,
            name: "UI/UX Design",
            price: 25000,
            available: true
        },
        {
            id: 3,
            name: "Mobile App Development",
            price: 80000,
            available: false
        }
    ];

    return (
        <div>
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    name={service.name}
                    price={service.price}
                    available={service.available}
                />
            ))}
        </div>
    );
}

export default App;