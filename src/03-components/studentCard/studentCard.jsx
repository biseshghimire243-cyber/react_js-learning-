function StudentCard({ name, course, semester }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Course: {course}</p>
            <p>Semester: {semester}</p>
        </div>
    );
}

export default StudentCard;