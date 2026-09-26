// program-11.jsx

function StudentList() {
    const students = [
        "Bishesh Ghimire",
        "Rahul Sharma",
        "Suman Rai"
    ];

    return (
        <div>
            <h1>Student List</h1>

            {students.map((student, index) => (
                <p key={index}>{student}</p>
            ))}
        </div>
    );
}

export default StudentList;