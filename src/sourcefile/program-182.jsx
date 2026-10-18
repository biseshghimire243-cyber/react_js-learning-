function CourseCard({ name, enrolled, capacity }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Enrolled Students: {enrolled}</p>
            <p>Maximum Capacity: {capacity}</p>
            {enrolled < capacity ? <p>Enrollment Open</p> : <p>Course Full</p>}
        </div>
    );
}

function App() {
    const courses = [
        { id: 1, name: "React.js", enrolled: 25, capacity: 40 },
        { id: 2, name: "Python", enrolled: 30, capacity: 30 },
        { id: 3, name: "Node.js", enrolled: 18, capacity: 25 }
    ];

    return (
        <div>
            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    name={course.name}
                    enrolled={course.enrolled}
                    capacity={course.capacity}
                />
            ))}
        </div>
    );
}

export default App;