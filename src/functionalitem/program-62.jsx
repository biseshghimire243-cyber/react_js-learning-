function ResultCard({ name, marks }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Marks: {marks}</p>

            {marks >= 40 ? (
                <p>Result: Pass</p>
            ) : (
                <p>Result: Fail</p>
            )}
        </div>
    );
}

function App() {
    const students = [
        {
            id: 1,
            name: "Bishesh",
            marks: 82
        },
        {
            id: 2,
            name: "Rahul",
            marks: 35
        },
        {
            id: 3,
            name: "Sita",
            marks: 67
        }
    ];

    return (
        <div>
            <h1>Student Results</h1>

            {students.map((student) => (
                <ResultCard
                    key={student.id}
                    name={student.name}
                    marks={student.marks}
                />
            ))}
        </div>
    );
}

export default App;