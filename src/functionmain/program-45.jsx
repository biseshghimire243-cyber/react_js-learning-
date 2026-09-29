function CourseCard({ title, instructor, price, online }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Instructor: {instructor}</p>
            <p>Price: Rs. {price}</p>
            <p>
                Mode: {online ? "Online" : "Physical"}
            </p>
        </div>
    );
}

function App() {
    const courses = [
        {
            id: 1,
            title: "React.js",
            instructor: "John Smith",
            price: 12000,
            online: true
        },
        {
            id: 2,
            title: "Python",
            instructor: "David Brown",
            price: 10000,
            online: false
        },
        {
            id: 3,
            title: "Node.js",
            instructor: "Alex Johnson",
            price: 15000,
            online: true
        }
    ];

    return (
        <div>
            <h1>Courses</h1>

            {courses.map((course) => (
                <CourseCard
                    key={course.id}
                    title={course.title}
                    instructor={course.instructor}
                    price={course.price}
                    online={course.online}
                />
            ))}
        </div>
    );
}

export default App;