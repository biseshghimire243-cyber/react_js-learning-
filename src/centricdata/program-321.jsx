import React from "react";

function CourseReport({ course }) {
    const percentage = Math.round(
        (course.completed / course.total) * 100
    );

    return (
        <div style={{
            padding: "15px",
            margin: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px"
        }}>
            <h3>{course.name}</h3>

            <p>
                Completed: {course.completed}/{course.total} lessons
            </p>

            <div style={{
                height: "12px",
                backgroundColor: "#ddd",
                borderRadius: "10px"
            }}>
                <div style={{
                    width: `${percentage}%`,
                    height: "12px",
                    backgroundColor: "green",
                    borderRadius: "10px"
                }} />
            </div>

            <p>{percentage}% Completed</p>
        </div>
    );
}

function App() {
    const courses = [
        { id: 1, name: "React", completed: 18, total: 20 },
        { id: 2, name: "Node.js", completed: 12, total: 25 },
        { id: 3, name: "Python", completed: 30, total: 30 }
    ];

    return (
        <div>
            <h1>My Learning Progress</h1>

            {courses.map(course => (
                <CourseReport key={course.id} course={course} />
            ))}
        </div>
    );
}

export default App;