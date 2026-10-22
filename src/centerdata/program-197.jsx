function Course({ title, instructor, price, enrolled, rating }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Instructor: {instructor}</p>
      <p>Price: Rs. {price}</p>
      <p>Students Enrolled: {enrolled}</p>
      <p>Rating: {rating}/5</p>
      <p>
        {rating >= 4.5
          ? "Top Rated Course"
          : rating >= 3.5
          ? "Good Course"
          : "Needs Improvement"}
      </p>
    </div>
  );
}

export default function App() {
  const courses = [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "Aarav Sharma",
      price: 2500,
      enrolled: 1200,
      rating: 4.8,
    },
    {
      id: 2,
      title: "Python Programming",
      instructor: "Sita Rai",
      price: 2000,
      enrolled: 900,
      rating: 4.4,
    },
    {
      id: 3,
      title: "Web Design Basics",
      instructor: "Ram Thapa",
      price: 1500,
      enrolled: 400,
      rating: 3.2,
    },
  ];

  return (
    <div>
      <h1>Online Course Catalog</h1>
      {courses.map((course) => (
        <Course key={course.id} {...course} />
      ))}
    </div>
  );
}