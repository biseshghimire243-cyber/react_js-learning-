function CourseCard({ name, duration, level }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Duration: {duration}</p>
            <p>Level: {level}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Programming Courses</h1>

            <CourseCard
                name="React.js"
                duration="3 Months"
                level="Intermediate"
            />

            <CourseCard
                name="Python"
                duration="4 Months"
                level="Beginner"
            />

            <CourseCard
                name="Node.js"
                duration="3 Months"
                level="Advanced"
            />
        </div>
    );
}

export default App;