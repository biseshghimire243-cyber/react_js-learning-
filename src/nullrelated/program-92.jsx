function ResultCard({ name, marks }) {
    let grade;

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "F";
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Marks: {marks}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}

function App() {
    const students = [
        { id: 1, name: "Bishesh", marks: 88 },
        { id: 2, name: "Rahul", marks: 72 },
        { id: 3, name: "Sita", marks: 45 },
        { id: 4, name: "Aarav", marks: 32 }
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