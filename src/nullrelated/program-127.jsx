function StudentResult({ name, marks }) {
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
            marks: 85
        },
        {
            id: 2,
            name: "Rahul",
            marks: 72
        },
        {
            id: 3,
            name: "Sita",
            marks: 35
        }
    ];

    return (
        <div>
            {students.map((student) => (
                <StudentResult
                    key={student.id}
                    name={student.name}
                    marks={student.marks}
                />
            ))}
        </div>
    );
}

export default App;