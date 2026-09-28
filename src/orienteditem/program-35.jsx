function Destination({ name, district, popular }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>District: {district}</p>
            <p>
                {popular ? "Popular Destination" : "Less Visited"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Nepal Destinations</h1>

            <Destination
                name="Mount Everest"
                district="Solukhumbu"
                popular={true}
            />

            <Destination
                name="Ilam"
                district="Ilam"
                popular={false}
            />
        </div>
    );
}

export default App;