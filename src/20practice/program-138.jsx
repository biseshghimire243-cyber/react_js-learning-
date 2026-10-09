function CourseCard({ name, duration, completed }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Duration: {duration}</p>

            {completed ? (
                <p>Course Completed</p>
            ) : (
                <p>Course In Progress</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <CourseCard
                name="React.js"
                duration="3 Months"
                completed={true}
            />

            <CourseCard
                name="Node.js"
                duration="2 Months"
                completed={false}
            />
        </div>
    );
}

export default App;