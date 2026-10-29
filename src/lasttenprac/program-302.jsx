function CourseCard({ course }) {
  const { title, instructor, duration, level, topics } = course;

  return (
    <article>
      <h2>{title}</h2>
      <p>Instructor: {instructor}</p>
      <p>Duration: {duration}</p>
      <p>Level: {level}</p>

      <h3>Topics</h3>
      <ul>
        {topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </article>
  );
}

function App() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "Alex",
      duration: "4 weeks",
      level: "Beginner",
      topics: ["JSX", "Components", "Props"],
    },
    {
      id: 2,
      title: "Node.js Essentials",
      instructor: "Morgan",
      duration: "6 weeks",
      level: "Intermediate",
      topics: ["Modules", "HTTP", "Express"],
    },
  ];

  return (
    <div>
      <h1>Available Courses</h1>

      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default App;