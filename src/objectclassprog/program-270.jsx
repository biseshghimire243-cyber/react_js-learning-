function App() {
  const courses = [
    { name: "HTML and CSS", completed: 10, total: 10 },
    { name: "JavaScript", completed: 7, total: 10 },
    { name: "React", completed: 4, total: 12 },
    { name: "Node.js", completed: 2, total: 8 },
  ];

  return (
    <div>
      <h1>Online Course Progress</h1>

      {courses.map((course) => {
        const progress = (course.completed / course.total) * 100;

        return (
          <div key={course.name}>
            <h3>{course.name}</h3>
            <p>
              Lessons: {course.completed}/{course.total}
            </p>
            <p>Progress: {progress.toFixed(1)}%</p>
            <p>
              Status:{" "}
              {progress === 100
                ? "Completed"
                : progress >= 50
                ? "In Progress"
                : "Getting Started"}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;