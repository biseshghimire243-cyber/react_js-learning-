// program-12.jsx

function StudentList() {
    const students = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            course: "B.Sc. CSIT"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            course: "BCA"
        },
        {
            id: 3,
            name: "Suman Rai",
            course: "BIT"
        }
    ];

    return (
        <div>
            <h1>Students</h1>

            {students.map((student) => (
                <div key={student.id}>
                    <h2>{student.name}</h2>
                    <p>{student.course}</p>
                </div>
            ))}
        </div>
    );
}

export default StudentList;