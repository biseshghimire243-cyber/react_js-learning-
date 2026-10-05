function CourseCard({ title, duration, students }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Duration: {duration}</p>
            <p>Students: {students}</p>
        </div>
    );
}

function App() {
    const courses = [
        {
            id: 1,
            title: "React.js",
            duration: "3 Months",
            students: 40
        },
        {
            id: 2,
            title: "Python",
            duration: "4 Months",
            students: 35
        },
        {
            id: 3,
            title: "Web Development",
            duration: "6 Months",
            students: 50
        }
    ];

    return (
        <div>
            <h1>Available Courses</h1>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    duration={course.duration}
                    students={course.students}
                />
            ))}
        </div>
    );
}

export default App;