function CourseProgress({ title, completedLessons, totalLessons }) {
    const percentage = (completedLessons / totalLessons) * 100;

    return (
        <div>
            <h2>{title}</h2>
            <p>Completed: {completedLessons}/{totalLessons} lessons</p>
            <p>Progress: {percentage.toFixed(0)}%</p>

            {percentage === 100 ? (
                <p>Course Completed!</p>
            ) : (
                <p>Keep Learning!</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <CourseProgress
                title="React.js"
                completedLessons={20}
                totalLessons={20}
            />
            <CourseProgress
                title="Node.js"
                completedLessons={8}
                totalLessons={15}
            />
        </div>
    );
}

export default App;