function CourseCard({ title, duration, level }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Duration: {duration}</p>
            <p>Level: {level}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Available Courses</h1>

            <CourseCard
                title="React.js"
                duration="3 Months"
                level="Beginner"
            />

            <CourseCard
                title="Node.js"
                duration="2 Months"
                level="Intermediate"
            />
        </div>
    );
}

export default App;