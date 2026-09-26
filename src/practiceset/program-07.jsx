// program-07.jsx

function Student({ name, age, course, city }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Course: {course}</p>
            <p>City: {city}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Student
                name="Bishesh Ghimire"
                age={22}
                course="B.Sc. CSIT"
                city="Itahari"
            />
        </div>
    );
}

export default App;