function CourseCard({ title, instructor, duration }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Instructor: {instructor}</p>
            <p>Duration: {duration}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <CourseCard
                title="React.js"
                instructor="John"
                duration="3 Months"
            />

            <CourseCard
                title="Python"
                instructor="David"
                duration="4 Months"
            />
        </div>
    );
}

export default App;