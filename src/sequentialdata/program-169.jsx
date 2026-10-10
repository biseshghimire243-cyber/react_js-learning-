function InternetPackage({ provider, speed, dataLimit, price }) {
    return (
        <div>
            <h2>{provider}</h2>
            <p>Speed: {speed} Mbps</p>
            <p>Data Limit: {dataLimit}</p>
            <p>Monthly Price: Rs. {price}</p>

            {speed >= 100 && <p>High-Speed Package</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <InternetPackage
                provider="WorldLink"
                speed={200}
                dataLimit="Unlimited"
                price={1500}
            />
            <InternetPackage
                provider="Classic Tech"
                speed={75}
                dataLimit="Unlimited"
                price={1000}
            />
        </div>
    );
}

export default App;