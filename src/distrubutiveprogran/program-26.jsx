function CourseCard({ title, instructor, students }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Instructor: {instructor}</p>
            <p>Students: {students}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <CourseCard
                title="React.js"
                instructor="John Smith"
                students={35}
            />

            <CourseCard
                title="Python"
                instructor="David Brown"
                students={42}
            />
        </div>
    );
}

export default App;