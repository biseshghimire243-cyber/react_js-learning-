import React from "react";

function StudentResult({ student }) {
    const total = student.marks.reduce(
        (sum, mark) => sum + mark,
        0
    );

    const percentage = total / student.marks.length;

    const result = percentage >= 40 ? "Pass" : "Fail";

    return (
        <div style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "12px",
            borderRadius: "8px"
        }}>
            <h2>{student.name}</h2>

            {student.subjects.map((subject, index) => (
                <p key={subject}>
                    {subject}: {student.marks[index]}
                </p>
            ))}

            <h3>Total: {total}</h3>
            <h3>Percentage: {percentage.toFixed(2)}%</h3>
            <h3>Result: {result}</h3>
        </div>
    );
}

function App() {
    const students = [
        {
            id: 1,
            name: "Bishesh",
            subjects: ["Math", "Science", "Computer"],
            marks: [85, 78, 92]
        },
        {
            id: 2,
            name: "Rahul",
            subjects: ["Math", "Science", "Computer"],
            marks: [45, 55, 60]
        },
        {
            id: 3,
            name: "Sita",
            subjects: ["Math", "Science", "Computer"],
            marks: [25, 35, 30]
        }
    ];

    return (
        <div>
            <h1>Student Result Management</h1>

            {students.map(student => (
                <StudentResult key={student.id} student={student} />
            ))}
        </div>
    );
}

export default App;