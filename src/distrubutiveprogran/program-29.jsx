function StudentCard({ name, marks }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Marks: {marks}</p>

            <p>
                Result: {marks >= 40 ? "Pass" : "Fail"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Results</h1>

            <StudentCard
                name="Bishesh Ghimire"
                marks={85}
            />

            <StudentCard
                name="Rahul Sharma"
                marks={35}
            />
        </div>
    );
}

export default App;