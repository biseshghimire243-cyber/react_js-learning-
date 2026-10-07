function TravelPackage({ destination, days, price, popular }) {
    return (
        <div>
            <h2>{destination}</h2>
            <p>Duration: {days} Days</p>
            <p>Price: Rs. {price}</p>

            {popular && <p>Popular Package</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <TravelPackage
                destination="Pokhara"
                days={3}
                price="12000"
                popular={true}
            />

            <TravelPackage
                destination="Chitwan"
                days={4}
                price="15000"
                popular={false}
            />
        </div>
    );
}

export default App;