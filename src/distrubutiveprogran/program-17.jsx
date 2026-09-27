function Course({ name, duration, fee }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Duration: {duration}</p>
            <p>Fee: Rs. {fee}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Course
                name="React.js"
                duration="3 Months"
                fee={15000}
            />

            <Course
                name="Node.js"
                duration="2 Months"
                fee={12000}
            />
        </div>
    );
}

export default App;