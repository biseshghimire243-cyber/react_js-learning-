function CourseCard({ name, instructor, students, online }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Instructor: {instructor}</p>
            <p>Students: {students}</p>

            {online ? (
                <p>Online Course</p>
            ) : (
                <p>Physical Course</p>
            )}
        </div>
    );
}

function App() {
    const courses = [
        {
            id: 1,
            name: "React.js",
            instructor: "Bishesh",
            students: 45,
            online: true
        },
        {
            id: 2,
            name: "Python",
            instructor: "Rahul",
            students: 35,
            online: false
        },
        {
            id: 3,
            name: "Web Design",
            instructor: "Sita",
            students: 50,
            online: true
        }
    ];

    return (
        <div>
            <h1>Course Platform</h1>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    name={course.name}
                    instructor={course.instructor}
                    students={course.students}
                    online={course.online}
                />
            ))}
        </div>
    );
}

export default App;