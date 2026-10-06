function StudentCard({ name, course, semester, passed }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Course: {course}</p>
            <p>Semester: {semester}</p>

            {passed ? (
                <p>✅ Passed</p>
            ) : (
                <p>❌ Failed</p>
            )}
        </div>
    );
}

function App() {
    const students = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            course: "B.Sc. CSIT",
            semester: "8th",
            passed: true
        },
        {
            id: 2,
            name: "Rahul Sharma",
            course: "BCA",
            semester: "6th",
            passed: false
        },
        {
            id: 3,
            name: "Sita Rai",
            course: "BIM",
            semester: "4th",
            passed: true
        }
    ];

    return (
        <div>
            <h1>Student Records</h1>

            {students.map((student) => (
                <StudentCard
                    key={student.id}
                    name={student.name}
                    course={student.course}
                    semester={student.semester}
                    passed={student.passed}
                />
            ))}
        </div>
    );
}

export default App;