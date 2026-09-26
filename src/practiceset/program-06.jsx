// program-06.jsx

function Student({ name, course }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Course: {course}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Student name="Bishesh Ghimire" course="B.Sc. CSIT" />
            <Student name="Rahul Sharma" course="BCA" />
        </div>
    );
}

export default App;