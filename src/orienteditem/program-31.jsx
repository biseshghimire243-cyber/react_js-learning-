function Teacher({ name, subject, experience }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Subject: {subject}</p>
            <p>Experience: {experience} years</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Teacher Information</h1>

            <Teacher
                name="Bishesh Ghimire"
                subject="Computer Science"
                experience={3}
            />

            <Teacher
                name="Rahul Sharma"
                subject="Mathematics"
                experience={5}
            />
        </div>
    );
}

export default App;