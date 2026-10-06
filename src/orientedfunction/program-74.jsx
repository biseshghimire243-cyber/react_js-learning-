function CourseCard({ name, level, completed }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Level: {level}</p>

            {completed ? (
                <p>✅ Course Completed</p>
            ) : (
                <p>📚 Course In Progress</p>
            )}
        </div>
    );
}

function App() {
    const courses = [
        {
            id: 1,
            name: "HTML & CSS",
            level: "Beginner",
            completed: true
        },
        {
            id: 2,
            name: "JavaScript",
            level: "Intermediate",
            completed: true
        },
        {
            id: 3,
            name: "React.js",
            level: "Intermediate",
            completed: false
        }
    ];

    return (
        <div>
            <h1>My Courses</h1>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    name={course.name}
                    level={course.level}
                    completed={course.completed}
                />
            ))}
        </div>
    );
}

export default App;